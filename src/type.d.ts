/// <reference types="react-scripts" />

interface IList {
    id: number
    title: string
}
  
type ListState = {
    someLists: IList[]
}
  
type ListAction = {
    type: string
    item: IList
}
  
type DispatchType = (args:ListAction) => ListAction