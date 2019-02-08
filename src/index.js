import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyBmX802Z21LkiOTx83JZBcDQDLxRT5_GZw",
    authDomain: "growers-eaf3f.firebaseapp.com",
    databaseURL: "https://growers-eaf3f.firebaseio.com",
    projectId: "growers-eaf3f",
    storageBucket: "growers-eaf3f.appspot.com",
    messagingSenderId: "12847442961"
});




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
