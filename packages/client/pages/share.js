import React from 'react';
import AuthenHOC from '../components/HOC/AuthenHOC';
import ShareComponent from '../components/ShareComponent';
import UserPageLayout from '../layouts/UserPageLayout';

const SharePage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <ShareComponent />
  </UserPageLayout>
);

export default AuthenHOC(SharePage);
