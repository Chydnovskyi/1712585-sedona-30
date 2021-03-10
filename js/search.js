const search = document.querySelector(".search");
const searchPopup = document.querySelector(".interest-search");
const search_button = document.querySelector(".search_button");
const check = document.querySelector(".check");

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
    if (!check.value) {
      evt.preventDefault();
      loginPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("interest", loginLogin.value);
      }
    }
  });