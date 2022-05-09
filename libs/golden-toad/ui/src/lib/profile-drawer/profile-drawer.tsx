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

  return (
    <Drawer
      title={<><h3>Profile</h3><p>{username}</p></>}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={isOpen}
      getContainer={false}
      style={{ position: 'absolute' }}
    >
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </Drawer>
  )
}

