import { Task } from "./task.js";

let addTaskButton = document.querySelector("#addTaskButton");
let taskName = document.querySelector("#taskName");
let taskExplantation = document.querySelector("#taskExplantation");
let selectedSection = document.querySelector("#taskSections");

addTaskButton.addEventListener("click", function () {
  let task = new Task(taskName.value, taskExplantation.value);
  addEvent(selectedSection.value, task);
});

function addEvent(sectionName, newTask) {
  let section = JSON.parse(localStorage.getItem(sectionName));

  section.taskList.push(newTask);
  localStorage.setItem(sectionName, JSON.stringify(section));
}
