import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import Elephant from "components/elephant/elephant";
import Socials from "components/socials/socials";
import ProfilePicture from "assets/profile-picture.png";

const ProfilePictureWrap = styled(Grid)`
  position: relative;
`;

const Title = styled.span`
  font-size: 48px;
  font-weight: 600;
`;

const Subtitle = styled.span`
  font-size: 30px;
  line-height: 36px;
`;

const SocialsWrap = styled.span`
  float: right;
`;

const Profile = (): React.ReactElement => (
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
        I'm <Title>daniel araujo</Title>
      </Subtitle>
    </Grid>
  </Grid>
);

export default Profile;
