import React, { useState } from 'react'
import presets from './presets'
import * as S from './styled'

function Presets({ selectedPreset, setPreset }) {
    const [showMore, setShowMore] = useState(false)
    const generatePresets = () => {
        const presetDom = []
        let index = 0
        for (let [key, value] of Object.entries(presets)) {
            if (showMore || index < 3) {
                presetDom.push(
                    <S.Element
                        key={`preset-${key}`}
                        selected={selectedPreset === key}
                        onClick={() => setPreset(key)}
                    >
                        <span>{value}</span>
                        <img src={`/previews/${key}.jpg`} alt={`Preview for ${value} option`}/>
                    </S.Element>
                )
            }
            index++
        }
        return presetDom
    }

    return <S.Container>
        <S.ElementContainer>
            { generatePresets() }
            {   !showMore &&
                    <S.ShowMore
                        variant="contained"
                        onClick={() => { setShowMore(true)} }
                    >
                        Show more options...
                    </S.ShowMore>
            }
        </S.ElementContainer>
    </S.Container>
}

export default Presets