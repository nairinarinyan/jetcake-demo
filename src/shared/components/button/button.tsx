import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { classes } from 'react-scoped-styles';

import './button.styl';

export enum ButtonVariant {
    PRIMARY,
    SECONDARY,
    LINK
}

interface Props {
    variant: ButtonVariant;
    to?: string;
    onClick?: VoidFunction;
    fluid?: boolean;
    disabled?: boolean;
}

const ButtonContent: FunctionComponent<Props> = ({ variant, fluid, onClick, disabled, children }) => {
    const isPrimary = variant === ButtonVariant.PRIMARY;
    const isSecondary = variant === ButtonVariant.SECONDARY;
    const isLink = variant === ButtonVariant.LINK;

    return (
        <button className={
            classes('button',
                [isPrimary, 'primary'],
                [isSecondary, 'secondary'],
                [isLink, 'link'],
                [fluid, 'fluid'],
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export const Button: FunctionComponent<Props> = props => {
    const { to, fluid, disabled, onClick } = props;

    return (to && !disabled) ?
        <Link to={to} className={classes('anchor', [fluid, 'fluid'])} onClick={onClick}>
            <ButtonContent {...props} />
        </Link> :
        <ButtonContent {...props} />
};