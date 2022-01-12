import React from "react";
import styled from "styled-components";

const CenteredText = styled.div`
  text-align: center;
`;

const ScrollText = styled.span`
  opacity: 0.5;
  user-select: none;
`;

const Description = (): React.ReactElement => (
  <CenteredText>
    Welcome to my personal site :)
    <br />
    Here, you’ll find some random stuff about me! Not sure what I’ll end up
    adding.
    <ScrollText>
      <br />
      <br />
      <br />
      scroll for more
      <br />
      (ps click the elephant)
    </ScrollText>
  </CenteredText>
);

export default Description;
