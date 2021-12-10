import {
  ADD_TO_BOOKMARK_LIST, REMOVE_FROM_BOOKMARK_LIST
} from '../../constants/actionTypes';

const INIT_STATE = {
  articles: localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK_LIST: {
      const articles = [...state.articles, action.payload];
      localStorage.setItem('articles', JSON.stringify(articles));
      return {...state, articles};
    }

    case REMOVE_FROM_BOOKMARK_LIST: {
      const articles = state.articles.filter((it, i) => it.title !== action.payload);
      localStorage.setItem('articles', JSON.stringify(articles));
      return {...state, articles};
    }
    default:
      return {...state};
  }
}
