import React from 'react';
import { TweeterUi, TweeterUiProps } from './tweeter-ui';

export default {
  component: TweeterUi,
  title: 'TweeterUi',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TweeterUiProps = {};

  return <TweeterUi />;
};
