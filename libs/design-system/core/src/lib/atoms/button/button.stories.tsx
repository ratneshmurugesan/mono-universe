import { Story, Meta } from '@storybook/react'
import { Button } from './button'

export default {
  component: Button,
  title: 'Atoms/Button',
} as Meta

const Template: Story = (args) => <Button {...args} />

export const Base = Template.bind({})
Base.args = {
  children: 'Base button',
}
