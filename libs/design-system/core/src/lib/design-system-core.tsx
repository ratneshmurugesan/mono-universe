import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DesignSystemCoreProps {}

const StyledDesignSystemCore = styled.div`
  color: pink;
`;

export function DesignSystemCore(props: DesignSystemCoreProps) {
  return (
    <StyledDesignSystemCore>
      <h1>Welcome to DesignSystemCore!</h1>
    </StyledDesignSystemCore>
  );
}

export default DesignSystemCore;
