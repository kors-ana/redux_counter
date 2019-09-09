import * as actionTypes from './actionTypes'


export const saveResult = (payload) => {
  return {
    type: actionTypes.STORE_RESULTS,
    result: payload,
  }
}

export const storeResults = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(payload))
    }, 2000)
  }
};

export const deleteResults = (id) => {
  return {
    type: actionTypes.DELETE_RESULTS,
    elId: id
  }
};