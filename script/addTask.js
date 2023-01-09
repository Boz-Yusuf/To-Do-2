import { Task } from "./task.js";

let addTaskButton = document.querySelector("#addTaskButton");
let taskName = document.querySelector("#taskName");
let taskExplantation = document.querySelector("#taskExplantation");
let selectedSection = document.querySelector("#taskSections");

//  geçici test fonksiyonu
taskModal.addEventListener("click", function (event) {
  event.preventDefault();
});

addTaskButton.addEventListener("click", function () {
  let task = new Task(taskName.value, taskExplantation.value);
  addEvent(selectedSection.value, task);
});

function addEvent(sectionName, newTask) {
  let section = JSON.parse(localStorage.getItem(sectionName));
  console.log(section.taskList);
  section.taskList.push(newTask);
  localStorage.setItem(sectionName, JSON.stringify(section));
}
