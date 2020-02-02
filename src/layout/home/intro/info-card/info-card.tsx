import React, { FunctionComponent } from 'react';
import './info-card.styl';

interface Props {
    content: string;
}

export const InfoCard: FunctionComponent<Props> = ({ content }) => {
    return (
        <div className="info-card">
            <div className="overlay" />
            <span>{content}</span>
        </div>
    );
};