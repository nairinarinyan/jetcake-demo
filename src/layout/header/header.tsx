import React, { FunctionComponent } from 'react';
import { useBloc } from 'reactive-blocs';
import { Link } from 'react-router-dom';
import { Button, ButtonVariant } from 'shared/components/button/button';
import { userBloc } from 'user/user.bloc';
import { authBloc } from 'auth/auth.bloc';

import logo from 'assets/images/jetcake-logo.png';
import './header.styl';

const renderLogoutButton = () => (
    <>
        <div className="button">
            <Button fluid to="/profile" variant={ButtonVariant.LINK}>My Profile</Button>
        </div>
        <div className="button">
            <Button fluid variant={ButtonVariant.SECONDARY} onClick={authBloc.logOut}>Logout</Button>
        </div>
    </>
);

const renderAuthButtons = () => (
    <>
        <div className="button">
            <Button fluid to="/login" variant={ButtonVariant.LINK}>Sign in</Button>
        </div>
        <div className="button">
            <Button fluid to="/get-started" variant={ButtonVariant.PRIMARY}>Get started</Button>
        </div>
    </>
)

export const Header: FunctionComponent = () => {
    const user = useBloc(userBloc.currentUser);

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="JetCake Logo"/>
            </Link>
            <div className="auth-buttons">
                {user === undefined ? null :
                    user ? renderLogoutButton() : renderAuthButtons()
                }
            </div>
        </header>
    );
};