import { CustomTable, RenderInIFrame, CustomSidePanel } from '@mono-universe/golden-toad/ui'
import styled from 'styled-components';

const StyledAdmin = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
`

export default function Admin() {
    return (
        <StyledAdmin>
            <RenderInIFrame>
                <CustomTable />
            </RenderInIFrame>
            <CustomSidePanel />
        </StyledAdmin>
    )
}
