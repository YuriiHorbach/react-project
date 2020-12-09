import App from './App';
import state from './redux/state.js';
import {addPost} from "./redux/state.js";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state);
