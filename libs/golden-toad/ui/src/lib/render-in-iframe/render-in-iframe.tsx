import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface RenderInIFrameProps {
  children: ReactNode;
}

const StyledIFrame = styled.iframe``;

export function RenderInIFrame(props: RenderInIFrameProps) {
  const { children } = props;
  const [ref, setRef] = useState<HTMLIFrameElement>()
  const container = ref?.contentWindow?.document?.body;
  const setStateRef = (refElement: HTMLIFrameElement) => setRef(refElement)

  return (
    <StyledIFrame ref={setStateRef} width="100%" height="800px" title="Users Table" src={`${window.origin}/user-table`} sandbox="allow-same-origin allow-scripts">
      {container && createPortal(children, container)}
    </StyledIFrame>
  );
}

