import {
  getUsers,
  RootState,
  setSelectedUserId,
  showProfileDrawer,
  showPostDrawer,
  useAppDispatch,
  useAppSelector,
} from '@mono-universe/golden-toad/data-access';
import { useEffect } from 'react';

export const useCustomTable = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state: RootState) => state.user.users);
  const selectedUserId = useAppSelector(
    (state: RootState) => state.user.selectedUserId
  );
  const isProfileOpen = useAppSelector(
    (state: RootState) => state.user.isProfileOpen
  );
  const isPostOpen = useAppSelector(
    (state: RootState) => state.user.isPostOpen
  );

  const handleViewProfile = (userId: number) => {
    console.log('handleViewProfile', userId);
    dispatch(setSelectedUserId(userId));
    dispatch(showProfileDrawer());
  };
  const handleViewPost = (userId: number) => {
    console.log('handleViewPost', userId);
    dispatch(setSelectedUserId(userId));
    dispatch(showPostDrawer());
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log({ selectedUserId, isProfileOpen, isPostOpen });

  return {
    userData,
    handleViewProfile,
    handleViewPost,
  };
};
