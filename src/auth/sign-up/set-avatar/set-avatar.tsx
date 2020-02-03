import React, { FunctionComponent, DragEvent } from 'react';
import { Button, ButtonVariant } from 'shared/components/button/button';

import './set-avatar.styl';

interface Props {
    onSubmit: VoidFunction;
}

export const SetAvatar: FunctionComponent<Props> = ({ onSubmit }) => {
    const onDrop = (evt: DragEvent) => {
        evt.preventDefault();
    };

    const onDragOver = (evt: DragEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
    };

    return (
        <div className="container">
            <h1 className="title">Upload your avatar</h1>
            <div className="file-rect">
                <div className="drag-zone" onDrop={onDrop} onDragOver={onDragOver}>
                    <input type="file" id="input-tile" />
                    <label className="centered" htmlFor="input-tile">
                        <span>Click to choose the image or drag it here</span>
                    </label>
                </div>
            </div>
            <Button fluid variant={ButtonVariant.PRIMARY} onClick={onSubmit}>
                Next
            </Button>
        </div>
    );
};