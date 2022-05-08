import { CustomTable, RenderInIFrame } from '@mono-universe/golden-toad/ui'
import styled from 'styled-components';
import { useAppContextDeps } from '@mono-universe/golden-toad/context/app-context';

const StyledAdmin = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
`

export default function Admin() {
    const { contextName }: { contextName: string } = useAppContextDeps();
    console.log("Admin", contextName);
    return (
        <>
            {contextName}
            <StyledAdmin>
                <RenderInIFrame><CustomTable /></RenderInIFrame>
            </StyledAdmin>
        </>
    )
}
