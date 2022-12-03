import React from 'react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'test',
  variant: 'contained', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'small', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: ()=> void 0,
};

export const LargeContained = Template.bind({});
LargeContained.args = {
  label: 'test',
  variant: 'contained', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'large', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};

export const SmallContained = Template.bind({});
SmallContained.args = {
  label: 'test',
  variant: 'contained', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'small', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};

export const MediumContained = Template.bind({});
MediumContained.args = {
  label: 'test',
  variant: 'contained', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'medium', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};

export const MediumOutlined = Template.bind({});
MediumOutlined.args = {
  label: 'test',
  variant: 'outlined', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'medium', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};

export const LargeOutlined = Template.bind({});
LargeOutlined.args = {
  label: 'test',
  variant: 'outlined', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'large', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};

export const SmallOutlined = Template.bind({});
SmallOutlined.args = {
  label: 'test',
  variant: 'outlined', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'small', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};

export const MediumText = Template.bind({});
MediumText.args = {
  label: 'test',
  variant: 'text', // text || contained || outlined
  type: 'button', //  button || submit
  classname: 'test', // Single classname
  size: 'medium', // small || medium || large
  disabled: false,
  isLoading: false,
  onClick: () => void 0,
};
