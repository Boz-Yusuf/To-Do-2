export class Task {
  constructor(taskName, taskInfo) {
    this.taskName = taskName;
    this.taskInfo = taskInfo;
  }
}

export class Section {
  constructor(sectionName) {
    this.sectionName = sectionName;
    this.taskList = [];
  }
}
