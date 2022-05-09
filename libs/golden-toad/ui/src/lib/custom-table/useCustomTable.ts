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

  const handleViewProfile = (userId: number) => {
    dispatch(setSelectedUserId(userId));
    dispatch(showProfileDrawer());
  };
  const handleViewPost = (userId: number) => {
    dispatch(setSelectedUserId(userId));
    dispatch(showPostDrawer());
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return {
    userData,
    handleViewProfile,
    handleViewPost,
  };
};
