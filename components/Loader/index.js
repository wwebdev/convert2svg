import React, { useState } from 'react'
import * as S from './styled'

const Loader = ({ progress }) => {
    const [showInfo, setShowInfo] = useState(false)
    /* setTimeout(() => {
        setShowInfo(true)
    }, 4000); */
    console.log(progress)

    return (
        <S.Container>
            <S.Headline>
                Converting your image...
            </S.Headline>

            { progress }

            <S.Info isVisible={showInfo}>
                Depending on your image size, this can take up to some minutes...
            </S.Info>
        </S.Container>
    )
}

export default Loader
