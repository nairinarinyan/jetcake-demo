import React, { FunctionComponent, useState, FormEvent } from 'react';
import { TextInput } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';
import { authBloc, Question } from 'auth/auth.bloc';
import { securityQuestions } from 'user/user.bloc';

import './set-security-questions.styl';

interface Props {
    onSubmit: VoidFunction;
}

export const SetSecurityQuestions: FunctionComponent<Props> = ({ onSubmit }) => {
    const [answers, setAnswers] = useState(securityQuestions.map(() => ''));
    const disabled = answers.some(a => !a);

    const setAnswer = (idx: number) => (answer: string) => {
        const answersToSet = answers.slice();
        answersToSet[idx] = answer;
        setAnswers(answersToSet);
    };

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();

        const questionsWithAnswers: Question[] = answers.map((answer, idx): Question => ({
            question: securityQuestions[idx],
            answer
        }));

        authBloc.setSecurityQuestions(questionsWithAnswers);
        onSubmit();
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Setup security questions</h1>
                <div className="questions">
                    {securityQuestions.map((question, idx) => {
                        const answer = answers[idx];

                        return (
                            <TextInput
                                key={idx}
                                label={question}
                                placeholder="Your answer"
                                value={answer}
                                onChange={setAnswer(idx)}
                            />
                        );
                    })}
                </div>
                <Button fluid disabled={disabled} variant={ButtonVariant.PRIMARY}>
                    Sign up
                </Button>
            </form>
        </div>
    );
};