import { useGLTF } from '@react-three/drei'
export const useCustomGltf = () => {
  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  /* eslint-disable-next-line */
  const gltfObj = useGLTF('/assets/glbs/shoe-draco.glb')

  return gltfObj
}
