let showFeatureLists = false;
let showCompanyLists = false;

let showFeatureList = document.querySelector(".show-feature-list");
let showCompanyList = document.querySelector(".show-company-list");

showFeatureList.addEventListener("click", () => {
  showFeatureLists = !showFeatureLists;
  if (showFeatureLists) {
    document.querySelector(".features-list").style.display = "block";
  } else {
    document.querySelector(".features-list").style.display = "none";
  }
});
showCompanyList.addEventListener("click", () => {
  showCompanyLists = !showCompanyLists;
  if (showCompanyLists){
    document.querySelector(".company-list").style.display = "block";
  }
  else{
    document.querySelector(".company-list").style.display = "none";
  }
  
});

const iconMenu = document.querySelector(".hamburger-icon");
const modal = document.querySelector(".list-container");
const iconClose = document.querySelector(".close-menu-icon");
iconMenu.addEventListener("click", () => {
  modal.classList.toggle("inactive");
});
iconClose.addEventListener("click", () => {
  modal.classList.toggle("inactive");
});
