import React, { FunctionComponent, useCallback, useState, FormEvent } from 'react';
import { TextInput, TextInputType } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';

import './set-credentials.styl';

interface Props {
    onSubmit: VoidFunction;
}

export const SetCredentials: FunctionComponent<Props> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback((evt: FormEvent) => {
        evt.preventDefault();
        onSubmit();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Sign Up to get started!</h1>
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
                    Next
                </Button>
            </form>
        </div>
    );
};