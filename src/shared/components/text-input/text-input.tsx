import React, { FunctionComponent } from 'react';
import './text-input.styl';

export enum TextInputType {
    TEXT = 'text',
    PASSWORD = 'password'
}

interface Props {
    label: string;
    placeholder: string;
    type?: TextInputType;
    value: string;
    onChange: (val: string) => void;
}

export const TextInput: FunctionComponent<Props> = props => {
    const { label, placeholder, type, value, onChange } = props;

    return (
        <div className="container">
            <label className="label">
                <span>{label}</span>
                <input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={evt => onChange(evt.target.value)}
                />
            </label>
        </div>
    );
};

TextInput.defaultProps = {
    type: TextInputType.TEXT
};