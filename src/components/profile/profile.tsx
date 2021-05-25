import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

import Description from "components/description/description";
import Elephant from "components/elephant/elephant";
import Socials from "components/socials/socials";
import ProfilePicture from "assets/profile-picture.png";

const ProfilePictureWrap = styled(Grid)`
  position: relative;
`;

const Title = styled.span`
  font-size: 48px;
  ${(props) => props.theme.breakpoints.down("xs")} {
    font-size: 40px;
  }
  font-weight: 600;
`;

const Subtitle = styled.span`
  font-size: 30px;
  line-height: 36px;
`;

const SocialsWrap = styled.span`
  float: right;
`;

const DescriptionWrap = styled.div`
  margin-top: 48px;
`;

const Profile = (): React.ReactElement => (
  <div>
    <Grid container justify="center" alignItems="center" spacing={4}>
      <ProfilePictureWrap item>
        <Elephant />
        <img src={ProfilePicture} height="256px" alt="profile" />
      </ProfilePictureWrap>
      <Grid item>
        <Subtitle>
          hi,
          <SocialsWrap>
            <Socials />
          </SocialsWrap>
          <br />
          I'm <Title theme={useTheme()}>daniel araujo</Title>
        </Subtitle>
      </Grid>
    </Grid>
    <DescriptionWrap>
      <Description />
    </DescriptionWrap>
  </div>
);

export default Profile;
