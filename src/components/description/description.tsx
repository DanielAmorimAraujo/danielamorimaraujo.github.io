import React from "react";
import styled from "styled-components";

const Centered = styled.div`
  text-align: center;
`;

const Description = (): React.ReactElement => (
  <Centered>
    Welcome to my personal site :)
    <br />
    Here, you’ll find some random stuff about me! Not sure what I’ll end up
    adding.
  </Centered>
);

export default Description;
