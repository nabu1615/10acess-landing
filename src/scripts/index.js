var elem = document.querySelector(".testimonies");
var flkty = new Flickity(elem, {
  wrapAround: true,
  prevNextButtons: false,
});

const $form = document.getElementById("newsletter-form"),
  url =
    "https://script.google.com/macros/s/AKfycbyuGe7F61RCg-N2f2U06kubLpemmEh9TAB6TRu5Bdps4QX1_8I/exec";

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url, { method: "POST", mode: "no-cors", body: new FormData($form) })
    .then(() => {
      alert("Registro Exitoso");
      $form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
