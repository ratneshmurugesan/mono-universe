import styled from 'styled-components';

import { Route, Link, Routes } from 'react-router-dom';
import Admin from './page/admin';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div role="navigation">
        <h2>Admin panel</h2>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Admin />}
        />
      </Routes>
    </StyledApp>
  );
}

export default App;
