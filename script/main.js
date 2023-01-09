let taskModal = document.querySelector("#addTaskModal");
let sectionModal = document.querySelector("#taskSectionModal");
let dropdownSection = document.querySelector("#taskSections");

fillTasks();

function openTaskModal() {
  fillSections();
  taskModal.style.display = "block";
}
function openSectionModal() {
  sectionModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target != taskModal) {
//     console.log("olmayaydıı");
//     taskModal.style.display = "none";
//   }
// };

function hideTask() {
  taskModal.style.display = "none";
}

function hideSection() {
  sectionModal.style.display = "none";
}

//Sistemdeki section isimlerini task ekleme işlemi için getirmeyi sağlar
function fillSections() {
  let sectionList = JSON.parse(localStorage.getItem("sectionList"));
  sectionList.forEach((element) => {
    let newOption = document.createElement("option");
    newOption.setAttribute("name", element);
    newOption.innerHTML = element;
    dropdownSection.append(newOption);
  });
}

function fillTasks() {
  let sectionList = JSON.parse(localStorage.getItem("sectionList"));

  sectionList.forEach((section) => {
    let taskList = JSON.parse(localStorage.getItem(section));

    taskList.taskList.forEach((task) => {
      let taskCard = document.createElement("div");
      taskCard.classList = "card";
      taskCard.innerHTML = `
      <div class="card__header">
      <div class="card__title">
        ${task.taskName}
        <!-- <i class="fa-regular fa-ellipsis-vertical"></i> KULLANAMADIM -->
      </div>
      <i class="fa-solid fa-wrench"></i>
    </div>

    <div class="card__info">
      <div class="info__date">12th Jan</div>
      <i class="fa-solid fa-circle"></i>
      <div class="info__creator">Created by <b>Prahlad</b></div>
    </div>
    <div class="card__text">
      ${task.taskInfo}
    </div>
    <div class="card__img">
      <img class="task-img" src="image/img1.png" alt="task image" />
    </div>
    <div class="card__connections">
      <span
        ><a href=""
          ><i class="fa-solid fa-link"></i>docs.google</a
        ></span
      >
      <span
        ><a href=""
          ><i class="fa-solid fa-paperclip"></i>docs.google</a
        ></span
      >
    </div>
    <div class="card__attribute">
      <div class="attribute__label attribute__label--design">
        Design
      </div>
      <div class="attribute__label attribute__label--development">
        Development
      </div>
    </div>
    <div class="card__footer">
      <span><i class="fa-solid fa-message"></i> 3</span>
      <span
        ><i class="fa-solid fa-user"></i
        ><i class="fa-solid fa-user"></i>
      </span>
    </div>
    <div class="card__button">
      <input
        class="button task-button task-button--check"
        type="button"
        value="CHECK"
      />

      <input
        type="button"
        class="button task-button task-button--delete"
        value="DELETE"
        onclick="msg()"
      />
    </div>`;
      document.addEventListener("DOMContentLoaded", () => {
        let parentSection = document.getElementById(section);
        parentSection.append(taskCard);
      });
    });
  });
}
