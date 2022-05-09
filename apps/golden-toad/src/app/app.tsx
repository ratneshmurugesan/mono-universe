import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import Admin from './page/admin';
import { PostDrawer, CustomTable, ProfileDrawer } from '@mono-universe/golden-toad/ui';

const StyledApp = styled.div`
  // Your style here
`;


export function App() {
  return (
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
  );
}

export default App;
