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

let recommendBtn = document.querySelector("#food");

let restraunts = [
  "Tako King's Palace",
  "The Homeless Shelter",
  "Taco Bell (inferior)",
  "The Tako Cave",
  "Takos for life",
  "Inferior Tacos",
];

recommendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const randomElement =
    restraunts[Math.floor(Math.random() * restraunts.length)];
  alert(randomElement);
});
