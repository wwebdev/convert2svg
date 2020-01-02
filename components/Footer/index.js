import React from 'react'
import * as S from './styled'

const Footer = props => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <S.Container>
            <S.WidthLimit>
                <span>
                    © {year} - <a href="https://vincentwill.com/" target="_blank" rel="noopener">Vincent Will</a>
                </span>
                <a href="/privacy">
                    Privacy Policy
                </a>
            </S.WidthLimit>
        </S.Container>
    )
}

export default Footer
