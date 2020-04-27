var elem = document.querySelector(".testimonies");
var flkty = new Flickity(elem, {
  wrapAround: true,
  prevNextButtons: false,
});

const $form = document.getElementById("newsletter-form"),
  url =
    "https://script.google.com/macros/s/AKfycbxOW4lOiHaIne2bDWOK-4nRrwVWZC6c2VG6jH0pr1iBftLdsPfU/exec";

document.getElementById("newsletter-submit").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, { method: "POST", body: new FormData($form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
