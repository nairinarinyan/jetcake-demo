import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6SF09sSL2gaE7mgn0QSykzupnJM0DIGw",
    authDomain: "jetcake-97cbb.firebaseapp.com",
    databaseURL: "https://jetcake-97cbb.firebaseio.com",
    projectId: "jetcake-97cbb",
    storageBucket: "jetcake-97cbb.appspot.com",
    messagingSenderId: "531769548258",
    appId: "1:531769548258:web:6f507d6808682688d8adbb"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    const a = firebase.auth().currentUser;
    console.log(a);
});

import './styles/styles.styl';
import { Header } from './layout/header/header';
import { Router } from 'react-router-dom';
import { history } from 'shared/history';
import { Hero } from './layout/hero/hero';
import iconDefinitions from '!!raw-loader!./shared/components/icons/icon-definitions.svg';
import { Home } from './layout/home/home';

const Root = () => {
    return (
        <>
            <span style={{ display: 'block', height: 0 }} dangerouslySetInnerHTML={{ __html: iconDefinitions }} />
            <Router history={history}>
                <div className="container">
                    <Header />
                    <Home />
                </div>
            </Router>
        </>
    );
};

render(<Root />, document.getElementById('root'));
