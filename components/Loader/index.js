import React, { useState } from 'react'
import { BounceLoader } from 'react-spinners'
import * as S from './styled'

const Loader = props => {
    const [showInfo, setShowInfo] = useState(false)
    setTimeout(() => {
        setShowInfo(true)
    }, 4000);

    return (
        <S.Container>
            <S.Headline>
                Converting your image...
            </S.Headline>

            <BounceLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
            />

            <S.Info isVisible={showInfo}>
                Depending on your image size, this can take up to some minutes...
            </S.Info>
        </S.Container>
    )
}

export default Loader
