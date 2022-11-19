import styled from 'styled-components'
import { variant, color, LayoutProps } from 'styled-system'
import tokens from '../../tokens/_styles.json'

const { ratnesh_mono_component_button_text_color_idle } = tokens

const common = {
  fontFamily: 'ratnesh-roboto',
  fontStyle: 'normal',
  textAlign: 'left',
  boxSizing: 'border-box',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  pointerEvents: 'none',
  color: ratnesh_mono_component_button_text_color_idle,
}

const variants = {
  heading1: {
    fontSize: 5,
    fontWeight: 600,
    ...common,
  },
  heading2: {
    fontSize: [1, 2, 3, 3],
    fontWeight: 600,
    ...common,
  },
  heading3: {
    fontSize: 7,
    fontWeight: 600,
    ...common,
  },
  display: {
    fontSize: 3,
    ...common,
  },
  paragraph1: {
    fontSize: 2,
    ...common,
  },
  paragraph2: {
    fontSize: [1],
    ...common,
  },
  label: {
    fontSize: 3,
    textTransform: 'capitalize',
    ...common,
    fontStyle: 'italic',
  },
  link: {
    fontSize: 2, // 16px
    fontWeight: 600,
    cursor: 'pointer',
    ...common,
    pointerEvents: 'all',
    '&:hover': {
      backgroundColor: '#e2e2e2',
    },
    margin: '10px',
    padding: '2px 5px',
  },
}

const defaults = {
  margin: 0,
  padding: 0,
  display: 'inline',
}

type TextProps = {
  variant: string
} & LayoutProps

const handleProps = ({ variant }: TextProps) => ({
  variant: variant ?? 'paragraph2',
})

export const MonoText = styled('p').attrs<TextProps>(handleProps)<TextProps>(
  defaults,
  color,
  variant({ variants }),
)
export const MonoLabel = styled('label').attrs<TextProps>(handleProps)<TextProps>(
  defaults,
  color,
  variant({ variants }),
)
