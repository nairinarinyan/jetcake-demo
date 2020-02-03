import React, { FunctionComponent, useState, FormEvent } from 'react';
import { TextInput, TextInputType } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';
import { authBloc } from 'auth/auth.bloc';

import './set-credentials.styl';

interface Props {
    onSubmit: VoidFunction;
}

export const SetCredentials: FunctionComponent<Props> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    // poor man's validation
    const disabled = !email || !password || password.length < 6 || !phone;

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        authBloc.setCredentials(email, password, phone);
        onSubmit();
    };

    return (
        <div className="container">
            <h1 className="title">Sign Up to get started!</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputs">
                    <TextInput
                        label="Email"
                        placeholder="your.email@provider.com"
                        type={TextInputType.EMAIL}
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
                    <TextInput
                        label="Phone number"
                        placeholder="Your phone number"
                        type={TextInputType.TEL}
                        value={phone}
                        onChange={setPhone}
                    />
                </div>
                <Button disabled={disabled} fluid variant={ButtonVariant.PRIMARY}>
                    Next
                </Button>
            </form>
        </div>
    );
};