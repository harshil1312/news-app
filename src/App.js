import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore, compose} from 'redux';
import rootReducer from './redux/reducers'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import NewsList from "./pages/NewsList";
import HomeLayout from "./pages/HomeLayout";
import BookmarkList from "./pages/BookmarkList";

const composeEnhancers = process.env.ENVIRONMENT === "dev" ? (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 50
  }) : compose
) : compose;
const store = createStore(rootReducer, undefined, composeEnhancers())

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
              <Route path="/news">
                <Route exact path={`/news/headlines`} element={<NewsList type={'top-headlines?country=us'}/>}/>
                <Route exact path={`/news/all`} element={<NewsList type={'everything?sources=abc-news'}/>}/>
                <Route exact path={`/news/bookmarked`} element={<BookmarkList/>}/>
              </Route>
              <Route path="*" element={<Navigate to={`/news/headlines`}/>}/>
            </Route>
            <Route index element={<Navigate to={`/news/headlines`}/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
