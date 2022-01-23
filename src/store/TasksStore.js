import { makeAutoObservable } from "mobx";
import calendar from "../static/calendar-blue.png";
import bell from "../static/bell.png";
import tag from "../static/tag-add.png";
import message from "../static/message.png";

export default class TasksStore {
  constructor() {
    this._tags = [
      { selected: true, name: "Design" },
      { selected: false, name: "Home" },
      { selected: false, name: "Meet" },
      { selected: false, name: "P1" },
      { selected: false, name: "Fork" },
      { selected: false, name: "Fork" },
    ];

    this._types = [
      { icon: calendar, name: "calendar" },
      { icon: bell, name: "bell" },
      { icon: tag, name: "tag" },
      { icon: message, name: "message" }
    ];

    this._tasks = [
      {task: "Help with Sam's project", done: false, user: "sam"},
      {task: "Help with Anna pets and children", done: true, user: "sam"},
      {task: "Fix some UI issues", done: true, user: "sam"},
      {task: "Feed your self :)", done: false, user: "sam"},
    ];

    this._selectedType = calendar;

    makeAutoObservable(this);
  }

  get tasks() {
    return this._tasks;
  }

  get types() {
    return this._types;
  }

  get tags() {
    return this._tags;
  }

  get selectedType() {
    return this._selectedType;
  }

  setTasks(tasks){
    this._tasks = tasks;
  }

  setTypes(types) {
    this._types = types;
  }

  setSelectedType(selectedType) {
    this._selectedType = selectedType;
  }

  setTags(tags) {
    this._tags = tags;
  }
}
