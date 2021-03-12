const search = document.querySelector(".search");
const searchPopup = document.querySelector(".interest-search");
const date_arrival = document.querySelector("#date-arrival");
const date_departure = document.querySelector("#date-departure");
const interest_form = document.querySelector(".interest-form")

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("interest");
} catch (err) {
  isStorageSupport = false;
}

search.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("interest-search-show");
});

interest_form.addEventListener("submit", function (evt) {
    if (!date_arrival.value || !date_departure.value) {
      evt.preventDefault();
      searchPopup.classList.add("interest-search-error");
    } else if (isStorageSupport) {
        localStorage.setItem("interest", date_arrival.value);
      }
  });