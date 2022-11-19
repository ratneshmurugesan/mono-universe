import styled, { CSSObject, keyframes } from 'styled-components'
import { variant } from 'styled-system'
import { MonoBox } from '../../atoms/mono-box'
import * as tokens from '../../tokens/_styles.json'

const {
  ratnesh_mono_core_animation_10,
  ratnesh_mono_core_duration_30,
  ratnesh_mono_core_duration_20,
} = tokens

export const StyledModalUnderlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'ratnesh-roboto';
`

const slideOut = keyframes`
  100% { right: 0 }
`

const variants = {
  rightSide: {
    position: 'absolute',
    right: ['-100%', '-75%', '-50%'],
    width: ['100%', '75%', '50%'],
  },
  center: {
    height: '90%',
    width: ['100%', '80%', '90%'],
  },
  leftSide: {
    position: 'absolute',
    left: 0,
    width: ['100%', '75%', '50%'],
  },
}
const defaults: CSSObject = {
  margin: 0,
  display: 'inline',
  backgroundColor: 'white',
  color: 'black',
  padding: '30px',
  height: '100%',
  boxSizing: 'border-box',
}

export const StyledModalWithVariants = styled(MonoBox)`
  ${defaults}
  animation: ${slideOut} ${ratnesh_mono_core_duration_30} ${ratnesh_mono_core_animation_10} ${ratnesh_mono_core_duration_20} normal forwards;
  ${variant({ variants })}
`
