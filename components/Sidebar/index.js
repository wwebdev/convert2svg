import React, { useState } from 'react'
import * as S from './styled'
import Select from 'react-select'
import { presets, defaultPreset } from '../../helper/presets'

const options = Object.keys(presets)
    .map((key, index) => {
        return {
            value: key,
            label: presets[key].label,
        }
    })

const Sidebar = ({
    imageSrc,
    setOptions,
    updateSvg,
}) => {
    const [preset, setPreset] = useState(defaultPreset)
    const changePreset = e => {
        setPreset(e)
        setOptions(presets[e.value])
    }

    return (
        <S.Container>
            <S.Image src={imageSrc} />

            <Select
                value={preset}
                onChange={changePreset}
                options={options}
            />

            <S.Button onClick={updateSvg}>
                Update
            </S.Button>
        </S.Container>
    )
}

export default Sidebar
