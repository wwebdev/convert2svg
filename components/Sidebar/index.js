import React, { useState } from 'react'
import * as S from './styled'
import Select from 'react-select'
import { presets, defaultPreset } from '../../helper/presets'

const options = Object.keys(presets)
    .map((key, index) => {
        return {
            value: key,
            label: key, // presets[key],
        }
    })

const Sidebar = ({
    imageSrc,
    setOptions,
}) => {
    const [preset, setPreset] = useState(null)
    const changePreset = e => {
        // setOptions
    }

    return (
        <S.Container>
            <S.Image src={imageSrc} />

            <Select
                value={preset}
                onChange={changePreset}
                options={options}
            />

            <S.Button>
                Update
            </S.Button>
        </S.Container>
    )
}

export default Sidebar
