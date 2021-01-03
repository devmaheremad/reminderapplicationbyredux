import { ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER } from "../types";
import { bake_cookie, read_cookie } from "sfcookies";

let reminder = (state = [], action) => {
  let reminders = null;
  state = read_cookie("reminders");
  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      {
        whatToDo: action.whatToDo,
        timeToDo: action.timeToDo,
      },
    ];
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === DELETE_REMINDER) {
    reminders = state.filter((reminder, index) => index !== action.index);
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === CLEAR_REMINDERS) {
    reminders = [];
    bake_cookie("reminders", reminders);
    return reminders;
  } else {
    return state;
  }
};

export default reminder;
