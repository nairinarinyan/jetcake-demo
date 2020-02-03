import React, { FunctionComponent, useCallback, useState } from 'react';
import { Stepper } from 'shared/components/stepper/stepper';
import { authBloc } from 'auth/auth.bloc';

import { SetCredentials } from './set-credentials/set-credentials';
import { SetAvatar } from './set-avatar/set-avatar';
import { SetSecurityQuestions } from './set-security-questions/set-security-questions';

import './signup.styl';

enum SignUpStep {
    FIRST,
    SECOND
}

export const SignUp: FunctionComponent = () => {
    const [stepIdx, setStepIdx] = useState(0);

    const incrementStep = useCallback(() => {
        setStepIdx(stepIdx + 1);
    }, [stepIdx]);

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
                            return <SetSecurityQuestions onSubmit={authBloc.signUp} />
                    }
                }} />
            </div>
        </div>
    );
};