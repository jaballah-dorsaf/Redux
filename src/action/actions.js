import { ADD, DECREMENT } from "./types";
export const add = () => {
  return {
    type: ADD,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
