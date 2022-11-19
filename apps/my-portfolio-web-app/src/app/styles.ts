import styled, { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import tokens from 'libs/frontend/shared/design-system/src/lib/tokens/_fonts.json'
import { MonoBox, MonoGridBox } from '@mono-universe/frontend/shared/design-system'
import { normalize } from 'styled-normalize'

const { ratnesh_mono_asset_font_roboto } = tokens

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'ratnesh-roboto';
    src: url(data:font/ttf;charset=utf-8;base64,${ratnesh_mono_asset_font_roboto});
  }

  * {
      box-sizing: border-box;
    }

  body {
    height: 100vh;
    width: 100vw;
    border: 5px solid red;
    margin: 0;
    padding: 0;

   & > div {
      width: 100%;
      padding: 30px;
      position: absolute;
      top: 0;
      left: 0; 
      right: 0;
      bottom: 0;
   }
  }
`

export const StyledRootBox = styled(MonoGridBox)`
  grid-template-rows: 10% 2fr;
  grid-template-columns: 1fr;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 44rem;
`

export const StyledMonoBox = styled(MonoBox)`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
