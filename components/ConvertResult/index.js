import React from 'react'
import Paper from '@material-ui/core/Paper'
import { DotLoader } from 'react-spinners'

import * as S from './styled'

const ConvertResult = ({
    imageSrc,
    isLoading,
    svgPreview
}) => (
    <S.Container>
        { imageSrc &&
            <Paper>
                <img src={imageSrc} alt="your image preview" />
            </Paper>
        }

        <Paper>
            { isLoading && <DotLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
            /> }

            { // TODO check better option than dangerouslySetInnerHTML
                svgPreview && <div dangerouslySetInnerHTML={{ __html: svgPreview }}></div>
            }
        </Paper>
    </S.Container>
)

export default ConvertResult
