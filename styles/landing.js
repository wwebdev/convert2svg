import styled from 'styled-components'

export const Container = styled.main`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const CenterContent = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const SidebarContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`