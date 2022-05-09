import { Drawer } from 'antd';
import { Fragment } from 'react';
import { useProfileDrawer } from './useProfileDrawer';

type postProps = {
  id: number,
  title: string,
  body: string
}

export function ProfileDrawer() {
  const { onClose, isOpen, username,
    email,
    phone,
    website } = useProfileDrawer()

  console.log("ProfileDrawer", {
    isOpen, username,
    email,
    phone,
    website
  });

  return (
    <Drawer
      title={<><h3>Profile</h3><p>{username}</p></>}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={isOpen}
    >
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </Drawer>
  )
}

