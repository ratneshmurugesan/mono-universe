import { CustomTable, RenderInIFrame } from '@mono-universe/golden-toad/ui'
import styled from 'styled-components';

const StyledAdmin = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  background: #fafafa;
  border: 1px solid #ebedf0;
  border-radius: 2px;
`

export default function Admin() {
    return (
        <StyledAdmin>
            <RenderInIFrame>
                <CustomTable />
            </RenderInIFrame>
        </StyledAdmin>
    )
}
