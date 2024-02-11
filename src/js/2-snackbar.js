import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function createPromise(delay, option) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (option === "fulfilled") {
        resolve(delay);
      } else if (option === "rejected") {
        reject(delay);
      }
    }, delay);
  });
}

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const delay = parseInt(document.querySelector('input[name="delay"]').value);
  const option = document.querySelector('input[name="state"]:checked').value;

  const promise = createPromise(delay, option);

  promise.then(
    (delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    },
    (delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    }
  );
});
