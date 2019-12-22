import styled from 'styled-components'

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