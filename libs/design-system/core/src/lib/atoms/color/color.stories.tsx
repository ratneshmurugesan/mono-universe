import { Story, Meta } from '@storybook/react';
import { Color, ColorProps } from './color';
import {
  Title
} from '@storybook/addon-docs';

export default {
  component: Color,
  title: 'Design Tokens/Color',
  parameters: {
    docs: {
      page: () => (
        <Title />
      ),
    },
  }
} as Meta;

const Template: Story<ColorProps> = (args) => <Color {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
