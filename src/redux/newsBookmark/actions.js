import {
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST
} from '../../constants/actionTypes';


export const addToBookmark = (article) => {
  return (
    {
      type: ADD_TO_BOOKMARK_LIST,
      payload: article
    }
  )
}
export const removeFromBookmark = (article) => {
  return (
    {
      type: REMOVE_FROM_BOOKMARK_LIST,
      payload: article
    }
  )
}

