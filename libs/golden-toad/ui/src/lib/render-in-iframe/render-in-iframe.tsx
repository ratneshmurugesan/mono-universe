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
    <StyledIFrame ref={setStateRef} width="100%" height="100%" title="Users Table">
      {container && createPortal(children, container)}
    </StyledIFrame>
  );
}

export default RenderInIFrame;
