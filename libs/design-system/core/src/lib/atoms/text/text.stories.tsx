import { Story, Meta } from '@storybook/react'
import { Text, TextProps } from './text'

export default {
  component: Text,
  title: 'Atoms/Text',
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {}
