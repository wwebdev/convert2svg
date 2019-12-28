import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'
import { maxWidth, gradient } from '../../styles/constants'

export const Container = styled.div`
    width: 90%;
    max-width: ${maxWidth};
    margin: 0 auto;
`

export const ElementContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
`

export const Element = styled.div`
    position: relative;
    margin: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06);
    cursor: pointer;

    ${props => props.selected && css`
        background: ${gradient};
        padding: 4px;
        border-radius: 4px;
        margin: 6px;
    `}

    span {
        position: absolute;
        width: auto;
        right: ${props => props.selected ? '4px' : '0'};
        top: ${props => props.selected ? '4px' : '0'};
        padding: 5px 20px;
        background: rgba(0,0,0,0.8);
        color: #fff;
        border-bottom-left-radius: 8px;
        font-size: 16px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ShowMore = styled(Button)`
    margin: 10px !important;
`

/*
        display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${grey};
    color: ${grey};
    padding: 20px;
    text-align: center;
*/