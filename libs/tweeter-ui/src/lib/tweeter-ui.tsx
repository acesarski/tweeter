import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TweeterUiProps {}

const StyledTweeterUi = styled.div`
  color: pink;
`;

export function TweeterUi(props: TweeterUiProps) {
  return (
    <StyledTweeterUi>
      <h1>Welcome to tweeter-ui!</h1>
    </StyledTweeterUi>
  );
}

export default TweeterUi;
