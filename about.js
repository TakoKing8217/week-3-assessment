console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form submit");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let img = document.querySelector("img#the-picture");

img.addEventListener("mouseover", (evt) => {
  evt.preventDefault();
  alert(
    "Nice, you found the secret! Turns out, you're also quite the detective."
  );
});
