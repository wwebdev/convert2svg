import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Icon } from '@material-ui/core'
import SVG from 'react-inlinesvg'
import * as S from './styled'

// https://react-dropzone.netlify.com/
function Dropzone(props) {
    const onDrop = useCallback(acceptedFiles => {
        props.setImageSrc(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <S.Container
            {...getRootProps()}
            isDragActive={isDragActive}
        >
            <input {...getInputProps()} />
            {
                <S.Content>
                    <SVG
                        title="Image upload"
                        src="/images.svg"
                    />
                    { isDragActive
                        ? <p>Drop the files here ...</p>
                        : <div>
                            <p>Drag 'n' drop your image file here, or click to select file</p>
                            <S.UploadButton variant="contained">Upload Image</S.UploadButton>
                        </div>
                    }
                </S.Content>
            }
        </S.Container>
    )
}

export default Dropzone