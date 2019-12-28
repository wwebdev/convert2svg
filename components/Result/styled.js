import styled from 'styled-components'
import { PrimaryButton } from '../../styles/landing'
import { lightGrey, maxWidth } from '../../styles/constants'

export const Container = styled.div``
export const SvgPreview = styled.div`
    margin-bottom: 20px;

    svg {
        max-height: calc(100vh - 250px);
        width: 100%;
        max-width: ${maxWidth};
    }
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`
export const DownloadButton = styled(PrimaryButton)`
    width: 66%;
    margin: 0 0 0 20px !important;

    @media only screen and (max-width: 600px) {
        margin: 0 20px 20px !important;
        width: calc(100% - 40px);
    }
`
export const AgainButton = styled(PrimaryButton)`
    background: #fff !important;
    border: 1px solid ${lightGrey} !important;
    font-size: 12px !important;

    @media only screen and (max-width: 600px) {
        margin: 0 20px 20px !important;
        width: calc(100% - 40px);
    }
`