import React from 'react'
import * as S from './styled'

const Result = ({ svgPreview }) => (
    <S.Container>
        { // TODO check better option than dangerouslySetInnerHTML
            svgPreview && <div dangerouslySetInnerHTML={{ __html: svgPreview }}></div>
        }
    </S.Container>
)

export default Result
