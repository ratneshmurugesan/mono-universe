import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import Admin from './page/admin';
import { CustomTable } from '@mono-universe/golden-toad/ui';
import { Provider } from 'react-redux';
import { store } from '@mono-universe/golden-toad/data-access';

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
        </div>
      </StyledApp>
    </Provider>
  );
}

export default App;
