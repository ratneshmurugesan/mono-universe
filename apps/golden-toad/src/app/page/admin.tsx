import { CustomDrawer, CustomTable, RenderInIFrame, ProfileDrawer } from '@mono-universe/golden-toad/ui'
import styled from 'styled-components';

const StyledAdmin = styled.div`
`

export default function Admin() {
    return (
        <StyledAdmin>
            <RenderInIFrame>
                <CustomTable />
            </RenderInIFrame>
            <ProfileDrawer />
            <CustomDrawer />
        </StyledAdmin>
    )
}
