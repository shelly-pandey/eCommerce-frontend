import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootState } from './rootReducer';


function saveToLocalStorage(state: rootState) {
  try {
    const LocalStorageState = JSON.stringify(state);
    localStorage.setItem("state", LocalStorageState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  const LocalStorageState = localStorage.getItem("state")
  if (LocalStorageState === null) return undefined
  return JSON.parse(LocalStorageState);

}

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer, loadFromLocalStorage(),
    composeWithDevTools(
      applyMiddleware(...middleware)

    )
  );
  reduxStore.subscribe(() => saveToLocalStorage(reduxStore.getState()));

  return reduxStore;
}

export default storeFactory;