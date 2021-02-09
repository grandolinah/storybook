import React from 'react';

import Header from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Header',
  component: Header,
};

export const Text = () => <Header>Hello Header</Header>;
