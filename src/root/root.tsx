import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'layout/header/header';
import { Home } from 'layout/home/home';
import { SignUp } from 'auth/sign-up/signup';
import { Login } from 'auth/login/login';
import { Profile } from 'user/profile/profile';

import './root.styl';

interface Props {
}

export const Root: FunctionComponent<Props> = props => {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/get-started' component={SignUp} />
                <Route path='/profile' component={Profile} />
                <Home />
            </Switch>
        </div>
    );
};