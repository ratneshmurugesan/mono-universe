import styled from 'styled-components'
import {
  ratnesh_mono_component_button_shadow_idle,
  ratnesh_mono_component_button_space_idle,
  ratnesh_mono_component_button_background_color_focussed,
  ratnesh_mono_component_button_background_color_hovered,
  ratnesh_mono_component_button_radius_idle,
  ratnesh_mono_component_button_background_color_idle,
  ratnesh_mono_component_button_shadow_pressed,
} from '../../tokens/_styles.json'

const buttonLightProps = `
  box-shadow: ${ratnesh_mono_component_button_shadow_idle};
`

export const StyledButton = styled.button`
  background: ${ratnesh_mono_component_button_background_color_idle};
  box-shadow: ${ratnesh_mono_component_button_shadow_pressed};
  border-radius: ${ratnesh_mono_component_button_radius_idle};
  /* aspect-ratio: 3 / 1; */
  padding: ${ratnesh_mono_component_button_space_idle};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-family: 'ratnesh-roboto';
  &:hover {
    cursor: pointer;
    background: ${ratnesh_mono_component_button_background_color_hovered};
  }
  &:active {
    cursor: pointer;
    background: ${ratnesh_mono_component_button_background_color_focussed};
    ${buttonLightProps}
  }
`

export const ImgIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  ${StyledButton}:active & {
    transform: scale(0.9);
    transform: scale(0.9);
  }
`
