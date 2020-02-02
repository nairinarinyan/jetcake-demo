import React, { FunctionComponent } from 'react';
import logo from 'assets/images/jetcake-logo.png';
import { Button, ButtonVariant } from 'shared/components/button/button';

import './header.styl';

interface Props {
}

export const Header: FunctionComponent<Props> = props => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="JetCake Logo"/>
            </div>
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