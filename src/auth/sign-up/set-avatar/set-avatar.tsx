import React, { FunctionComponent } from 'react';
import { Button, ButtonVariant } from 'shared/components/button/button';
import { useUploading } from 'shared/hooks/use-uploading';
import { authBloc } from 'auth/auth.bloc';

import './set-avatar.styl';

interface Props {
    onSubmit: VoidFunction;
}

export const SetAvatar: FunctionComponent<Props> = ({ onSubmit }) => {
    const [fileInputRef, file, imageUrl, onInputChange, onDragOver, onDrop] = useUploading();

    const handleSubmit = () => {
        authBloc.setAvatarImage(file);
        onSubmit();
    };

    return (
        <div className="container">
            <h1 className="title">Upload your avatar</h1>
            <div className="file-rect">
                {file ?
                    <div className="preview">
                        <img src={imageUrl} alt=""/>
                    </div> :
                    <div className="drag-zone" onDrop={onDrop} onDragOver={onDragOver}>
                        <input type="file" id="input-file" accept="image/jpeg" onChange={onInputChange} ref={fileInputRef} />
                        <label className="centered" htmlFor="input-file">
                            <span>Click to choose the image or drag it here</span>
                        </label>
                    </div>
                }
            </div>
            <Button fluid disabled={!file} variant={ButtonVariant.PRIMARY} onClick={handleSubmit}>
                Next
            </Button>
        </div>
    );
};