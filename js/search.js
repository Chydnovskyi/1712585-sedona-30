const search = document.querySelector(".search");
const searchPopup = document.querySelector(".interest-search");
const search_button = document.querySelector(".search_button");
const date_arrival = document.querySelector("#date-arrival");
const date_departure = document.querySelector("#date-departure");

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

search_button.addEventListener("submit", function (evt) {
    if (!date_arrival.value || !date_departure.value) {
      evt.preventDefault();
      loginPopup.classList.add("modal-error");
    } else if (isStorageSupport) {
        localStorage.setItem("interest", date_arrival.value);
      }
  });