import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { Fragment } from 'react';
import { useProfileDrawer } from './useProfileDrawer';

type postProps = {
  id: number,
  title: string,
  body: string
}
const drawerContentStyle = {
  maxWidth: "300px",
  padding: "10px"
}

export function ProfileDrawer() {
  const { onClose, isOpen, username,
    email,
    phone,
    website } = useProfileDrawer();

  return (
    <SwipeableDrawer
      id="ProfileDrawer"
      anchor="right"
      open={isOpen}
      onOpen={() => null}
      onClose={onClose}
      disableSwipeToOpen={true}
      swipeAreaWidth={0}
    >
      <div style={drawerContentStyle}>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    </SwipeableDrawer>
  )
}

