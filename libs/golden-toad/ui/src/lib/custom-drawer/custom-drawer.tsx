import { Drawer } from 'antd';
import { Fragment } from 'react';
import { useCustomDrawer } from './useCustomDrawer';

type postProps = {
  id: number,
  title: string,
  body: string
}

export function CustomDrawer() {
  const { onClose, isOpen, postData, selectedUserName } = useCustomDrawer()

  console.log("CustomDrawer", {
    isOpen,
    selectedUserName
  });

  return (
    <Drawer
      title={<><h3>Post</h3><p>{selectedUserName}</p></>}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={isOpen}
      getContainer={false}
      style={{ position: 'absolute' }}
    >
      {postData.map((post: postProps) => {
        return <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      })}
    </Drawer>
  )
}

