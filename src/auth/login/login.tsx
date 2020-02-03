import React, { FunctionComponent, useCallback, useState, FormEvent } from 'react';
import { TextInput, TextInputType } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';
import { authBloc } from 'auth/auth.bloc';

import './login.styl';

interface Props {
}

export const Login: FunctionComponent<Props> = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        authBloc.login(email, password);
    };

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Sign in</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <TextInput
                            label="Email"
                            placeholder="your.email@provider.com"
                            value={email}
                            onChange={setEmail}
                        />
                        <TextInput
                            label="Password"
                            placeholder="Your Password"
                            type={TextInputType.PASSWORD}
                            value={password}
                            onChange={setPassword}
                        />
                    </div>
                    <Button fluid variant={ButtonVariant.PRIMARY}>
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
};