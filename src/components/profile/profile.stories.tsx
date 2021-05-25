import React from "react";
import CProfile from "./profile";

const Story = {
  title: "Profile",
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Profile = (): React.ReactElement => <CProfile onResumeClick={() => {}} />;

export default Story;
export { Profile };
