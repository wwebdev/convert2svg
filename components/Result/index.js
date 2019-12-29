import React from 'react'
import * as S from './styled'

const Result = ({ svgPreview, resetResult, fileName }) => {
    const downloadSvg = () => {
        const element = document.createElement("a")
        const file = new Blob([svgPreview], {type: 'image/svg+xml'})
        element.href = URL.createObjectURL(file)
        element.download = `${fileName}.svg`
        document.body.appendChild(element) // Required for this to work in FireFox
        element.click()
    }

    return (
        <S.Container>
            { svgPreview && <S.SvgPreview dangerouslySetInnerHTML={{ __html: svgPreview }}></S.SvgPreview> }
            <S.Buttons variant="contained">
                <S.AgainButton onClick={resetResult}>Convert another image</S.AgainButton>
                <S.DownloadButton onClick={downloadSvg}>Download SVG</S.DownloadButton>
            </S.Buttons>
        </S.Container>
    )
}

export default Result
