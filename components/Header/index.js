import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'
import * as S from './styled'

const Header = props => (
    <S.Container>
        <S.WidthLimit>
            <S.Link href="/">Convert2Svg</S.Link>

            <S.Icons>
                <a href="https://github.com/Vincenius/convert2svg" target="_blank" rel="noopener">
                    <GitHubIcon />
                </a>
            </S.Icons>
        </S.WidthLimit>
    </S.Container>
)

export default Header
