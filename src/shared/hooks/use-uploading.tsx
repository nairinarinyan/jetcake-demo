import { MutableRefObject, ChangeEvent, useRef, useState, DragEvent } from 'react';

export type UploadigHookHandles = [
    MutableRefObject<HTMLInputElement>,
    File,
    string,
    (evt: ChangeEvent) => void,
    (evt: DragEvent) => void,
    (evt: DragEvent) => void,
];

export const useUploading = (): UploadigHookHandles => {
    const fileInputRef = useRef<HTMLInputElement>();
    const [file, setFile] = useState<File>(null);
    const [imageUrl, setImageUrl] = useState<string>(null);

    const onDragOver = (evt: DragEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
    };

    const onDrop = (evt: DragEvent) => {
        evt.preventDefault();
        const file = evt.dataTransfer.files[0];
        setFile(file);
        getImageUrl(file);
    };

    const onInputChange = (evt: ChangeEvent) => {
        const file = fileInputRef.current.files[0];
        setFile(file);
        getImageUrl(file);
    };

    const getImageUrl = (imageFile: File) => {
        const reader = new FileReader();
    
        reader.onload = evt => {
            setImageUrl(evt.target.result as string);
        };
    
        reader.readAsDataURL(imageFile);
    };

    return [fileInputRef, file, imageUrl, onInputChange, onDragOver, onDrop];
};