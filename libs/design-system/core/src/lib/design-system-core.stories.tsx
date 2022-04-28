import { Story, Meta } from '@storybook/react';
import { DesignSystemCore, DesignSystemCoreProps } from './design-system-core';

export default {
  component: DesignSystemCore,
  title: 'DesignSystemCore',
} as Meta;

const Template: Story<DesignSystemCoreProps> = (args) => (
  <DesignSystemCore {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
