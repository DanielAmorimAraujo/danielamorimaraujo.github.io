import React from "react";
import FileOutlineIcon from "mdi-react/FileOutlineIcon";
import GithubIcon from "mdi-react/GithubIcon";
import LinkedinIcon from "mdi-react/LinkedinIcon";
import MailOutlineIcon from "mdi-react/MailOutlineIcon";
import styled from "styled-components";

import { globalColors } from "library/styles";
import { LINKS } from "library/config";

interface ISocials {
  onResumeClick: () => void;
}

const Icon = styled.span`
  cursor: pointer;
  margin: 0 4px;
  &:hover {
    color: ${(props) => props.color};
  }
`;

const Socials = ({ onResumeClick }: ISocials): React.ReactElement => (
  <>
    <Icon color={globalColors.blue}>
      <FileOutlineIcon onClick={onResumeClick} />
    </Icon>
    <Icon color={globalColors.green}>
      <GithubIcon
        onClick={() => {
          window.open(LINKS.github);
        }}
      />
    </Icon>
    <Icon color={globalColors.pink}>
      <LinkedinIcon
        onClick={() => {
          window.open(LINKS.linkedin);
        }}
      />
    </Icon>
    <Icon color={globalColors.red}>
      <MailOutlineIcon
        onClick={() => {
          window.open("mailto:" + LINKS.email);
        }}
      />
    </Icon>
  </>
);

export default Socials;
