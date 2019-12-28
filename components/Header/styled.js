import styled from 'styled-components'
import { gradient, maxWidth } from '../../styles/constants'

export const Container = styled.header`
    background: ${gradient};
    padding: 20px 0;
    margin-bottom: 30px;
`
export const WidthLimit = styled.div`
    width: 90%;
    max-width: ${maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Link = styled.a`
    color: #fff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-decoration: none;
`
export const Icons = styled.div`
    a {
        line-height: 1;
        margin: 0 10px;

        &:last-child {
            margin-right: 0;
        }
    }

    svg {
        color: #fff;
    }
`