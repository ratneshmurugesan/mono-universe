import {
  closeProfileDrawer,
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@mono-universe/golden-toad/data-access';
import { useEffect, useState } from 'react';

type userProps = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: string;
};

export const useProfileDrawer = () => {
  const dispatch = useAppDispatch();
  const [profileData, setProfileData] = useState<userProps>();

  const isProfileOpen = useAppSelector(
    (state: RootState) => state.user.isProfileOpen
  );
  const userData = useAppSelector((state: RootState) => state.user.users);
  const selectedUserId = useAppSelector(
    (state: RootState) => state.user.selectedUserId
  );

  const onClose = () => dispatch(closeProfileDrawer());

  useEffect(() => {
    if (selectedUserId) {
      const selectedUser: userProps = userData.filter(
        (user: userProps) => user.id === selectedUserId
      )[0];
      setProfileData(selectedUser);
    }
  }, [selectedUserId, userData]);

  console.log('useProfileDrawer', { isProfileOpen });

  return {
    onClose,
    isOpen: isProfileOpen,
    username: profileData?.username,
    email: profileData?.email,
    phone: profileData?.phone,
    website: profileData?.website,
  };
};
