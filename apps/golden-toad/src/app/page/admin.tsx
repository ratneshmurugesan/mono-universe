import { CustomTable, RenderInIFrame } from '@mono-universe/golden-toad/ui'
import styled from 'styled-components';

const StyledAdmin = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
`

export default function Admin() {
    return (
        <StyledAdmin>
            <RenderInIFrame><CustomTable /></RenderInIFrame>
        </StyledAdmin>
    )
}
