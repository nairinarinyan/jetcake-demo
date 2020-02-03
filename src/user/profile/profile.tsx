import React, { FunctionComponent, useState, useEffect, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { useBloc } from 'reactive-blocs';
import { userBloc, securityQuestions } from 'user/user.bloc';
import { TextInput } from 'shared/components/text-input/text-input';
import { Button, ButtonVariant } from 'shared/components/button/button';

import './profile.styl';

interface Props {
}

export const Profile: FunctionComponent<Props> = props => {
    const user = useBloc(userBloc.currentUser);
    const imageUrl = useBloc(userBloc.imageUrl);
    const userData = useBloc(userBloc.userData);

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (user) {
            setEmail(user.email);
        }
    }, [user]);

    useEffect(() => {
        if (userData) {
            setPhoneNumber(userData.phoneNumber)
            setAnswers(userData.questions.map(q => q.answer));
        }
    }, [userData]);

    if (user === null) {
        return <Redirect to="/login" />
    }

    const setAnswer = (idx: number) => (answer: string) => {
        const answersToSet = answers.slice();
        answersToSet[idx] = answer;
        setAnswers(answersToSet);
    };

    const onSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        userBloc.updateUserData(email, phoneNumber, answers);
    };

    return (
        <div className="container">
            <div className="content">
                <div className="avatar">
                    <img src={imageUrl} />
                </div>
                {(!user || !userData) ? null :
                    <div className="user-data">
                        <form className="form" onSubmit={onSubmit}>
                            <h2 className="title">My Profile</h2>

                            <TextInput
                                label="Email"
                                placeholder="Your email"
                                value={email}
                                onChange={setEmail}
                            />
                            <TextInput
                                label="Phone number"
                                placeholder="Your email"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                            />

                            <h2 className="title">Security Questions</h2>

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

                            <Button variant={ButtonVariant.PRIMARY}>Save</Button>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};