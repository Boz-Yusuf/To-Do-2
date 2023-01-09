import { Section } from "./task.js";

let addSectionButton = document.querySelector("#addSectionButton");
let sectionName = document.querySelector("#sectionName");
let sectionList = JSON.parse(localStorage.getItem("sectionList"));

loadSections();

//Create New Section
addSectionButton.addEventListener("click", function () {
  // Add Section Name Titles of Sections List
  let sectionList = JSON.parse(localStorage.getItem("sectionList"));
  sectionList.push(sectionName.value);
  let sectionString = JSON.stringify(sectionList);
  localStorage.setItem("sectionList", sectionString);

  // Create locale Storage for every Section
  let newSection = new Section(sectionName.value);
  localStorage.setItem(newSection.sectionName, JSON.stringify(newSection));
});

function createSection(sectionTitle) {
  let sectionParent = document.querySelector(".content__box");
  let newSection = document.createElement("div");
  newSection.setAttribute("id", sectionTitle);
  newSection.classList = "box__column";
  newSection.innerHTML = `
   <h2 class="column__title">${sectionTitle}</h2>
   </div>`;
  sectionParent.append(newSection);
}

function loadSections() {
  sectionList.forEach((element) => {
    createSection(element);
  });
}
