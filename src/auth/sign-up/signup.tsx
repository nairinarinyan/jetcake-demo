import React, { FunctionComponent, useCallback, FormEvent, useState } from 'react';
import { TextInput, TextInputType } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';
import { Stepper } from 'shared/components/stepper/stepper';

import './signup.styl';
import { SetCredentials } from './set-credentials/set-credentials';
import { SetAvatar } from './set-avatar/set-avatar';
import { SetSecurityQuestions } from './set-security-questions/set-security-questions';

interface Props {
}

enum SignUpStep {
    FIRST,
    SECOND
}

export const SignUp: FunctionComponent<Props> = props => {
    const [stepIdx, setStepIdx] = useState(0);

    const incrementStep = useCallback(() => {
        setStepIdx(stepIdx + 1);
    }, [stepIdx]);

    const signUp = () => {
        
    };

    return (
        <div className="container">
            <div className="content">
                <Stepper stepCount={3} stepIdx={stepIdx} renderStep={stepIdx => {
                    switch (stepIdx) {
                        case 0:
                            return <SetCredentials onSubmit={incrementStep} />
                        case 1:
                            return <SetAvatar onSubmit={incrementStep} />
                        case 2:
                            return <SetSecurityQuestions onSubmit={signUp} />
                    }
                }} />
            </div>
        </div>
    );
};