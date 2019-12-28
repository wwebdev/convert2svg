import styled from 'styled-components'

export const Container = styled.main`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    visibility: visible;
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