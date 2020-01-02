import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { greenBlue, maxWidth } from './constants'

export const Container = styled.main`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    visibility: visible;
`
export const Content = styled.div`
    width: 90%;
    max-width: ${maxWidth};
    margin: 0 auto;
`

export const CenterContent = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SidebarContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`
export const PrimaryButton = styled(Button)`
    padding: 10px 30px !important;
    background: ${greenBlue} !important;
`