import React, { FunctionComponent, ReactNode } from 'react';
import { classes } from 'react-scoped-styles';
import { range } from 'lodash/fp';
import './stepper.styl';

export interface Step {
    
}

interface Props {
    stepIdx: number;
    stepCount: number;
    renderStep: (stepIdx: number) => ReactNode;
}

export const Stepper: FunctionComponent<Props> = props => {
    const { stepIdx, stepCount, renderStep } = props;

    return (
        <div className="container">
            <div className="steps">
                {range(0, stepCount).map(idx => {
                    const isActive = idx === stepIdx;
                    const completed = idx < stepIdx;

                    return (
                        <div key={idx} className={classes('step-circle', [isActive, 'active'], [completed, 'completed'])}>
                            {idx + 1}
                        </div>
                    );
                })}
            </div>
            {renderStep(stepIdx)}
        </div>
    );
};