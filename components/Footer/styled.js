import styled from 'styled-components'
import { maxWidth } from '../../styles/constants'

export const Container = styled.footer`
    box-shadow: 0 2px 3px rgba(0,0,0,0.06);
    background: #fff;
    padding: 6px 0;
    font-size: 14px;
    margin-top: 30px;
`
export const WidthLimit = styled.div`
    width: 90%;
    max-width: ${maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`