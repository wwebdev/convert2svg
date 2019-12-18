import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Backup } from '@material-ui/icons';
import { Icon } from '@material-ui/core';
import * as S from './styled'

function Dropzone(props) {
    const onDrop = useCallback(acceptedFiles => {
        props.setImageSrc(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <S.Container {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive
                ? <p>Drop the files here ...</p>
                : <div>
                    <Backup />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            }
        </S.Container>
    )
}

export default Dropzone