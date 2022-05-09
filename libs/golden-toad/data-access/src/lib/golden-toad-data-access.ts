import { postAPI, userAPI } from '@mono-universe/golden-toad/rest-api';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    selectedUserId: null,
    users: [],
    isProfileOpen: false,
    isPostOpen: false,
  },
  reducers: {
    users: (state, action) => {
      const userData = action.payload;
      state.users = userData;
    },
    updateUserId: (state, action) => {
      const selectedUserId = action.payload;
      state.selectedUserId = selectedUserId;
    },
    setPostDrawer: (state, action) => {
      const isPostOpen = action.payload;
      state.isPostOpen = isPostOpen;
    },
    setProfileDrawer: (state, action) => {
      const isProfileOpen = action.payload;
      state.isProfileOpen = isProfileOpen;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const getUsers = () => async (dispatch: AppDispatch) => {
  const response = await userAPI.getAll();
  const userData = await response?.data;
  const actions = userSlice.actions;
  dispatch(actions.users(userData));
};

export const setSelectedUserId =
  (userId: number) => (dispatch: AppDispatch) => {
    const actions = userSlice.actions;
    dispatch(actions.updateUserId(userId));
  };

export const getPostsByUserId = async (userId: number) => {
  const response = await postAPI.getPostsByUserId(userId);
  const postData = await response?.data;
  return postData;
};

export const showPostDrawer = () => (dispatch: AppDispatch) => {
  const actions = userSlice.actions;
  dispatch(actions.setPostDrawer(true));
  dispatch(actions.setProfileDrawer(false));
};

export const closePostDrawer = () => (dispatch: AppDispatch) => {
  const actions = userSlice.actions;
  dispatch(actions.setProfileDrawer(false));
  dispatch(actions.setPostDrawer(false));
};

export const showProfileDrawer = () => (dispatch: AppDispatch) => {
  const actions = userSlice.actions;
  dispatch(actions.setProfileDrawer(true));
  dispatch(actions.setPostDrawer(false));
};

export const closeProfileDrawer = () => (dispatch: AppDispatch) => {
  const actions = userSlice.actions;
  dispatch(actions.setPostDrawer(false));
  dispatch(actions.setProfileDrawer(false));
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
