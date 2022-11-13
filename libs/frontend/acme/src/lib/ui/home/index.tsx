import { Provider } from 'react-redux'

import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

import { CustomTable } from '../components/organisms/table'
import { store } from '../../data-access/store'

function Home() {
  return (
    <Provider store={store}>
      <MonoLabel variant="label">Acme</MonoLabel>
      <MonoText variant="heading2">Data Table component</MonoText>
      <CustomTable />
    </Provider>
  )
}

export default Home
