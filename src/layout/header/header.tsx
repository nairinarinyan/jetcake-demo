import React, { FunctionComponent } from 'react';
import { Button, ButtonVariant } from 'shared/components/button/button';
import logo from 'assets/images/jetcake-logo.png';

import './header.styl';
import { Link } from 'react-router-dom';

interface Props {
}

export const Header: FunctionComponent<Props> = props => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="JetCake Logo"/>
            </Link>
            <div className="auth-buttons">
                <div className="button">
                    <Button fluid to="/signin" variant={ButtonVariant.LINK}>Sign in</Button>
                </div>
                <div className="button">
                    <Button fluid to="/get-started" variant={ButtonVariant.PRIMARY}>Get started</Button>
                </div>
            </div>
        </header>
    );
};