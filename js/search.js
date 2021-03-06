const search = docunent.querySelector(".search");
const searchPopup = document.querySelector(".interest-search");

search.addEventListener("click", function () {
    evt.preventDefault();
    searchPopup.classList.add("interest-search-show");
});

search.addEventListener("click", function () {
    evt.preventDefault();
    searchPopup.classList.remove("interest-search-show");
});
