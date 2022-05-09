// import {
//   RootState,
//   setSelectedUserId,
//   showPostDrawer,
//   showProfileDrawer,
//   useAppDispatch,
//   useAppSelector,
// } from '@mono-universe/golden-toad/data-access';

// export const useCustomSidePanel = () => {
//   const dispatch = useAppDispatch();

//   const isProfileOpen = useAppSelector(
//     (state: RootState) => state.user.isProfileOpen
//   );
//   const isPostOpen = useAppSelector(
//     (state: RootState) => state.user.isPostOpen
//   );

//   const selectedUserId = useAppSelector(
//     (state: RootState) => state.user.selectedUserId
//   );

//   const handleViewProfile = (userId: number) => {
//     dispatch(showProfileDrawer());
//   };
//   const handleViewPost = (userId: number) => {
//     dispatch(setSelectedUserId(userId));
//     dispatch(showPostDrawer());
//   };

//   return {
//     isProfileOpen,
//     isPostOpen,
//     selectedUserId,
//     handleViewProfile,
//     handleViewPost,
//   };
// };
