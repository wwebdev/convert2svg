import React from 'react'
import * as S from './styled'

const Footer = props => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <S.Container>
            <S.WidthLimit>
                <span>
                    © {year} - <a href="https://wweb.dev?utm_source=convert2svg" target="_blank" rel="noopener">wweb.dev</a>
                </span>
                <a href="/privacy">
                    Privacy Policy
                </a>
            </S.WidthLimit>
        </S.Container>
    )
}

export default Footer
