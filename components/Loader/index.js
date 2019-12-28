import React, { useState } from 'react'
import * as S from './styled'

const Loader = ({ progress }) => {
    const [showInfo, setShowInfo] = useState(false)
    setTimeout(() => {
        setShowInfo(true)
    }, 4000);

    return (
        <S.Container>
            <S.Headline>
                Converting your image...
            </S.Headline>

            <S.ProgressBar>
                <S.ProgressBackground progress={progress} />
                { progress }
            </S.ProgressBar>

            <S.Info isVisible={showInfo}>
                Depending on your image size, this can take up to some minutes... <br />
                Beware, that large svgs can slow down your browser
            </S.Info>
        </S.Container>
    )
}

export default Loader
