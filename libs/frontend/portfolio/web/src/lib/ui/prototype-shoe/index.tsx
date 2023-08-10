import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Shoe from './components/shoe'
import ColorPicker from './components/color-picker'
import { StyledCanvas, StyledMonoGridBox } from './styles'

export function PrototypeShoe() {
  return (
    <StyledMonoGridBox>
      <StyledCanvas shadows camera={{ position: [0, 0, 4], fov: 40 }} id="canvas">
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={'Loading..'}>
          <Shoe data-name="shoe" />
          <Environment preset="city" />

          {/* <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={5} blur={1.5} far={0.8} /> */}
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </StyledCanvas>
      <ColorPicker />
    </StyledMonoGridBox>
  )
}
