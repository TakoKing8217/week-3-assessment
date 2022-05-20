let colorBtn = document.querySelector("#color");

colorBtn.addEventListener("click", (event) => {
  event.preventDefault();
  alert("My favorite color is Black... I think.");
});

let placeBtn = document.querySelector("#place");

placeBtn.addEventListener("click", (event) => {
  event.preventDefault(
    alert("My favorite place is home with my wife and kiddos.")
  );
});

let ritualBtn = document.querySelector("#ritual");

ritualBtn.addEventListener("click", (event) => {
  event.preventDefault();
  alert(
    "My favorite ritual is Eucharist, with video games in the morning being a close second."
  );
});
