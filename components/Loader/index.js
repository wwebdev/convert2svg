import React from 'react'
import * as S from './styled'

const Loader = ({ progress }) => (
    <S.Container>
        <S.Headline>
            Converting your image...
        </S.Headline>

        <S.ProgressBar>
            <S.ProgressBackground progress={progress} />
            <S.ProgressContent>
                { progress }%
            </S.ProgressContent>
        </S.ProgressBar>
    </S.Container>
)

export default Loader
