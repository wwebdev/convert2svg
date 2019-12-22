import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const Content = styled(Paper)`
    padding: 0;
    width: 50%;
    margin: 0 50px;

    img, svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`