import tokens from '../tokens/_styles.json'
const {
  ratnesh_mono_core_media_query_sm,
  ratnesh_mono_core_media_query_md,
  ratnesh_mono_core_media_query_lg,
  ratnesh_mono_core_media_query_xl,
} = tokens
interface Breakpoints extends Array<string> {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

const breakpoints: Breakpoints = [
  ratnesh_mono_core_media_query_sm,
  ratnesh_mono_core_media_query_md,
  ratnesh_mono_core_media_query_lg,
  ratnesh_mono_core_media_query_xl,
]

export const portfolioTheme = {
  breakpoints,
}
