import React, { FunctionComponent, useState } from 'react';
import { TextInput } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';

import './set-security-questions.styl';

interface Props {
    onSubmit: VoidFunction;
}

export const SetSecurityQuestions: FunctionComponent<Props> = ({ onSubmit }) => {
    const [firstAnswer, setFirstAnswer] = useState('');
    const [secondAnswer, setSecondAnswer] = useState('');
    const [thirdAnswer, setThirdAnswer] = useState('');

    return (
        <div className="container">
            <h1 className="title">Setup security questions</h1>
            <div className="questions">
                <TextInput label="What was that?" placeholder="Your answer" value={firstAnswer} onChange={setFirstAnswer} />
                <TextInput label="What was that?" placeholder="Your answer" value={secondAnswer} onChange={setSecondAnswer} />
                <TextInput label="What was that?" placeholder="Your answer" value={thirdAnswer} onChange={setThirdAnswer} />
            </div>
            <Button fluid variant={ButtonVariant.PRIMARY} onClick={onSubmit}>
                Sign up
            </Button>
        </div>
    );
};