import { Provider } from 'react-redux';

import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

import { Table } from '../components/organisms/table'
import { store } from '../../data-access/store';

function Home() {

  return (
    <Provider store={store}>
      <MonoLabel variant="label">Acme</MonoLabel>
      <MonoText variant="heading2">Data Table</MonoText>
      <Table />
    </Provider>
  )
}

export default Home;
