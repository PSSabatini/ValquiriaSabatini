import React from 'react';

import { App } from './index.js';

export default {
  title: 'Example/Button',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = () => <App />;


