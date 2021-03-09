import * as actionTypes from "./actionTypes"

const initialState: ListState = {
    someLists: [
      {
        id: 1,
        title: "list 1",
      },
      {
        id: 2,
        title: "list 2",
      },
    ],
}

const reducer = (
    state: ListState = initialState,
    action: ListAction
  ): ListState => {
    switch (action.type) {
      case actionTypes.ADD_LIST:
        const newList: IList = {
          id: Math.random(),
          title: action.item.title,
        }
        return {
          ...state,
          someLists: state.someLists.concat(newList),
        }
      case actionTypes.REMOVE_LIST:
        const updatedLists: IList[] = state.someLists.filter(
          article => article.id !== action.item.id
        )
        return {
          ...state,
          someLists: updatedLists,
        }
    }
    return state
  }
  
  export default reducer;