export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';


export const increment = () => {
  return {
    type: INCREMENT
  }
};

export const decrement = () => {
  return {
    type: DECREMENT
  }
};

export const add = (payload) => {
  return {
    type: ADD,
    val: payload
  }
};

export const subtract = (payload) => {
  return {
    type: SUBTRACT,
    val: payload

  }
};

export const storeResults = (payload) => {
  return {
    type: STORE_RESULTS,
    result: payload,
  }
};

export const deleteResults = (id) => {
  return {
    type: DELETE_RESULTS,
    elId: id
  }
};