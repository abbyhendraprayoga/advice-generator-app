const adviceId = document.getElementById("id");
const adviceData = document.getElementById("advice");
const loader = document.getElementById("loader");
const dice = document.getElementById("dice");
const button = document.getElementById("button");

function fetchData() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        adviceId.innerHTML = data.slip.id;
        adviceData.innerHTML = data.slip.advice;
        dice.classList.remove("hidden");
        loader.classList.add("hidden");
        button.disabled = false;
      }),
        3000;
    })
    .catch((error) => {
      console.error(error);
    });
}

button.addEventListener("click", () => {
  button.disabled = true;
  adviceData.innerHTML = "Please wait a moment..";
  dice.classList.add("hidden");
  loader.classList.remove("hidden");
  fetchData();
});
