import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import Shoe from "./components/shoe"
import ColorPicker from "./components/color-picker"


const canvasStyle = {
  width: '100%',
  height: '95vh',
  aspectRatio: '2 / 1',
}

export default function App() {
  return (
    <div>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 40 }} id="canvas" style={canvasStyle}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={'Loading..'}>
          <Shoe data-name="shoe" />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={5} blur={1.5} far={0.8} key={undefined} attach={undefined} args={undefined} children={undefined} onUpdate={undefined} up={undefined} rotation={undefined} matrix={undefined} quaternion={undefined} layers={undefined} dispose={undefined} clear={undefined} raycast={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerMissed={undefined} onPointerCancel={undefined} onWheel={undefined} receiveShadow={undefined} castShadow={undefined} visible={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      <ColorPicker />
    </div>
  )
}
