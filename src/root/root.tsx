import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'layout/header/header';
import { Home } from 'layout/home/home';
import { SignUp } from 'auth/sign-up/signup';

import './root.styl';

interface Props {
}

export const Root: FunctionComponent<Props> = props => {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path='/get-started' component={SignUp} />
                <Home />
            </Switch>
        </div>
    );
};