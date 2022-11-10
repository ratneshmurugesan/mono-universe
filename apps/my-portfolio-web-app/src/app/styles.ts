import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ratnesh_mono_asset_font_roboto } from 'libs/frontend/shared/design-system/src/lib/tokens/_fonts.json'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ratnesh-roboto';
    src: url(data:font/ttf;charset=utf-8;base64,${ratnesh_mono_asset_font_roboto});
  }

  html {
    height: 100vh; 
  }

  body { min-height: 100%; }
`