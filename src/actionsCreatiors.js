import { ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER } from "./types";

export const addReminder = (whatToDo, timeToDo) => {
  const action = {
    type: ADD_REMINDER,
    whatToDo,
    timeToDo,
  };
  return action;
};

export const deleteReminder = (index) => {
  const action = {
    type: DELETE_REMINDER,
    index,
  };

  return action;
};

export const clearReminder = () => {
  const action = {
    type: CLEAR_REMINDERS,
  };
  return action;
};
