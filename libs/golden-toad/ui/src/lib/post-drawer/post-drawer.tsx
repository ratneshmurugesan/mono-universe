import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { usePostDrawer } from './usePostDrawer';

type postProps = {
  id: number,
  title: string,
  body: string
}

const drawerContentStyle = {
  maxWidth: "300px",
  padding: "10px"
}

export function PostDrawer() {
  const { onClose, isOpen, postData, selectedUserName } = usePostDrawer()

  return (
    <SwipeableDrawer
      id="PostDrawer"
      anchor="right"
      open={isOpen}
      onOpen={() => null}
      onClose={onClose}
      disableSwipeToOpen={true}
      swipeAreaWidth={0}
    >
      <div style={drawerContentStyle}>
        <h3>Post</h3>
        <p>{selectedUserName}</p>
        {postData.map((post: postProps) => {
          return <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        })}
      </div>
    </SwipeableDrawer>
  )
}

