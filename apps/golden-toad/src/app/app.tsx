import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import Admin from './page/admin';
import { PostDrawer, CustomTable, ProfileDrawer } from '@mono-universe/golden-toad/ui';
import { store } from '@mono-universe/golden-toad/data-access';
import { Provider } from 'react-redux';

const StyledApp = styled.div`
  // Your style here
`;


export function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <div role="navigation">
          <Routes>
            <Route
              path="/"
              element={<Admin />}
            />
            <Route
              path="/user-table"
              element={<CustomTable />}
            />
          </Routes>
          <ProfileDrawer />
          <PostDrawer />
        </div>
      </StyledApp>
    </Provider>
  );
}

export default App;
