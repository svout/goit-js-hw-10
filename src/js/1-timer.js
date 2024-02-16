const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const startBtn = document.getElementById('startBtn');
const input = document.getElementById('datetime-picker');


startBtn.disabled = true;

let userSelectedDate = new Date(); 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            iziToast.error({
                message: 'Please choose a date in the future',
                position: "topRight",
            });
            updateStartBtn(false);
        } else {
            updateStartBtn(true);
            userSelectedDate = new Date(selectedDates[0]); 
        }
    },
};

let flatpickrInstance = flatpickr(input, options); 

class Timer {
    constructor(updateTimer) {
        this.updateTimer = updateTimer;
        this.isActive = false;
    }

    start() {
        if (this.isActive) return;
        this.isActive = true;
        updateStateInput(false);
        updateStartBtn(false);
        this.intervalId = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        updateStateInput(true);
        updateStartBtn(true);
    }

    #msToTime(s) {
        const ms = s % 1000;
        s = (s - ms) / 1000;
        const secs = s % 60;
        s = (s - secs) / 60;
        const mins = s % 60;
        s = (s - mins) / 60;
        const hrs = s % 24;
        const days = (s - hrs) / 24;

        return { days, hrs, mins, secs };
    }


    updateTime() {
        const target = userSelectedDate.getTime(); 
        const now = Date.now();
        if (target <= now) {
            this.stop();
            return;
        }
        const diff = target - now;
        const timeObj = this.#msToTime(diff);
        this.updateTimer(timeObj);
    }
}

const timer = new Timer(updateDisplay);

startBtn.addEventListener('click', () => {
    timer.start();
});

function updateDisplay({ days, hrs, mins, secs }) {
    const timeDays = addZero(days);
    const timeHrs = addZero(hrs);
    const timeMins = addZero(mins);
    const timeSecs = addZero(secs);

    dataDays.textContent = timeDays;
    dataHours.textContent = timeHrs;
    dataMinutes.textContent = timeMins;
    dataSeconds.textContent = timeSecs;
}

function addZero(num) {
    return num.toString().padStart(2, '0');
}

function updateStartBtn(isActive) {
    startBtn.disabled = !isActive;
}

function updateStateInput(isActive) {
    input.disabled = !isActive;
}

