import styled from 'styled-components';
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  size,
} from 'styled-system';

const sharedStyledSystem = (tag: HTMLElement) => {
  return styled(tag)(
    compose(
      space,
      color,
      typography,
      layout,
      flexbox,
      grid,
      background,
      border,
      position,
      shadow,
      size
    )
  );
};

export default sharedStyledSystem;
