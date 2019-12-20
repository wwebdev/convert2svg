import React from 'react'
import { DotLoader } from 'react-spinners'

import * as S from './styled'

const ConvertResult = ({
    imageSrc,
    isLoading,
    svgPreview
}) => (
    <S.Container>
        { imageSrc &&
            <S.Content>
                <img src={imageSrc} alt="your image preview" />
            </S.Content>
        }

        <S.Content>
            { isLoading && <DotLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
            /> }

            { // TODO check better option than dangerouslySetInnerHTML
                svgPreview && <div dangerouslySetInnerHTML={{ __html: svgPreview }}></div>
            }
        </S.Content>
    </S.Container>
)

export default ConvertResult
