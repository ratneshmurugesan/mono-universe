import { Story, Meta } from '@storybook/react'
import { Color, ColorProps } from './color'
export default {
  component: Color,
  title: 'Design Tokens/Color',
} as Meta

const Template: Story<ColorProps> = (args) => <Color {...args} />

export const Primary = Template.bind({})
Primary.args = {}
