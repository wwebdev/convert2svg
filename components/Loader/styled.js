import styled from 'styled-components'
import { gradient, grey } from '../../styles/constants'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Headline = styled.h2`
    margin: 0 0 40px;
`
export const Info = styled.p`
    transition: opacity 0.3s;
    opacity: ${props => props.isVisible ? '1' : '0'};
`
export const ProgressBar = styled.div`
    display: block;
    width: 100%;
    height: 40px;
    border: 2px solid ${grey};
`
export const ProgressBackground = styled.div`
    display: block;
    background: ${gradient};
    width: ${props => props.progress}%;
    height: 100%;
`