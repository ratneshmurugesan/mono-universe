// import { Route, Routes, Link } from 'react-router-dom'

import { asset, font } from '@mono-universe/design-system/shared/design-tokens'
import { useSoundSystem } from '@mono-universe/sound-system'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: 'ratnesh-roboto';
    src: url(data:font/ttf;charset=utf-8;base64,${font['family-primary']});
  }
`

const buttonLightProps = `
  box-shadow: inset -4.08px -4.08px 4.08px rgba(255, 255, 255, 0.7), inset 6.125px 6.125px 4.08px rgba(174, 174, 192, 0.2);
`

const NeuButton = styled.button`
  background: linear-gradient(
      135deg,
      rgba(249, 243, 197, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f0f1f5;
  box-shadow: -4.08px -4.08px 12.25px #ffffff,
    6.125px 6.125px 12.25px rgb(174 174 192 / 40%),
    inset 0px 0px 0px 1px rgb(255 255 255 / 20%);
  border-radius: 25%;
  aspect-ratio: 1 / 1;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
        315deg,
        rgba(249, 243, 197, 0.6) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      #f0f1f5;
  }

  &:active {
    cursor: pointer;
    background: linear-gradient(
        315deg,
        rgba(249, 243, 197, 0.6) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      #f0f1f5;
    ${buttonLightProps}
  }
`

const NeuText = styled.p`
  font-family: 'ratnesh-roboto';
  ${NeuButton}:active & {
    transform: scale(0.9);
  }
`

// const NeuHeading = styled.p`
// font-family: 'ratnesh-roboto';
// text-transform: uppercase;
// text-align: center;
// letter-spacing: 20px;
// `;

const BgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  height: 95vh;
  margin: 20px;
`

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`

const ImgLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`

const ImgIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  ${NeuButton}:active & {
    transform: scale(0.9);
  }
`

export function App() {
  const { playOnButtonClick, playOnButtonRelease } = useSoundSystem()

  const handleOnMouseDown = () => playOnButtonClick()

  const handleOnMouseUp = () => playOnButtonRelease()

  return (
    <BgDiv>
      <GlobalStyle />
      <WrapperDiv>
        <ImgLogo
          src={`data:image/png;base64,${asset.asset_image_ratnesh_murugesan_logos_transparent}`}
          alt="asset_image_ratnesh_murugesan_logos_transparent"
          width={350}
        />
        <NeuButton
          type="submit"
          onMouseDown={handleOnMouseDown}
          onMouseUp={handleOnMouseUp}
        >
          <ImgIcon
            src={`data:image/svg+xml;base64,${asset.asset_icon_lightning_ring}`}
            alt="asset_icon_lightning_ring"
            width={40}
          />
        </NeuButton>
      </WrapperDiv>
      <NeuText>...sound-supported application is under construction...</NeuText>
    </BgDiv>
  )
}

export default App
