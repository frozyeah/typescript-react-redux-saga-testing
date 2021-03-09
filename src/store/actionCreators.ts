import * as actionTypes from "./actionTypes"

export function addList(item: IList) {
  const action: ListAction = {
    type: actionTypes.ADD_LIST,
    item,
  }

  return simulateHttpRequest(action)
}

export function removeList(item: IList) {
  const action: ListAction = {
    type: actionTypes.REMOVE_LIST,
    item,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ListAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
