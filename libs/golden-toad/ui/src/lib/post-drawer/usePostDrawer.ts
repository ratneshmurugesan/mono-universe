import {
  closePostDrawer,
  getPostsByUserId,
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@mono-universe/golden-toad/data-access';
import { useEffect, useState } from 'react';

type userProps = {
  id: number;
  username: string;
  name: string;
};

export const usePostDrawer = () => {
  const dispatch = useAppDispatch();
  const [postData, setPostData] = useState([]);

  const isPostOpen = useAppSelector(
    (state: RootState) => state.user.isPostOpen
  );
  const userData = useAppSelector((state: RootState) => state.user.users);
  const selectedUserId = useAppSelector(
    (state: RootState) => state.user.selectedUserId
  );

  const onClose = () => dispatch(closePostDrawer());

  useEffect(() => {
    async function fetchPosts() {
      if (selectedUserId) {
        const postData = await getPostsByUserId(selectedUserId);
        setPostData(postData);
      }
    }
    fetchPosts();
  }, [dispatch, selectedUserId]);

  const selectedUser: userProps = userData.filter(
    (user: userProps) => user.id === selectedUserId
  )[0];

  return {
    onClose,
    isOpen: isPostOpen,
    postData,
    selectedUserName: selectedUser?.name,
  };
};
