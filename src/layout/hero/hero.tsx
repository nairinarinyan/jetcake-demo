import React, { FunctionComponent } from 'react';
import heroImg from 'assets/images/jetcake-hero.png';
import { Icon } from 'shared/components/icons/Icon';

import './hero.styl';

interface Props {
    onScrollClick: VoidFunction;
}

export const Hero: FunctionComponent<Props> = ({ onScrollClick }) => {
    return (
        <div className="hero">
            <img src={heroImg} alt=""/>
            <div className="scroll-circle-container">
                <div className="scroll-circle" onClick={onScrollClick}>
                    <div className="icon-container">
                        <div className="icon">
                            <Icon icon="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};