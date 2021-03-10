const search = document.querySelector(".search");
const searchPopup = document.querySelector(".interest-search");
const interest_form = document.querySelector("interest-form");
const adults = document.querySelector(".adults");
const children = document.querySelector(".children");

search.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("interest-search-show");
});

interest_form.addEventListener("submit", function (evt) {
    if (!adults.value || !children.value) {
      evt.preventDefault();
      loginPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", loginLogin.value);
      }
    }
  });