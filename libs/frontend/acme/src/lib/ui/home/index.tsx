import { Provider } from 'react-redux'

import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

import { CustomTable } from '../components/organisms/table'
import { store } from '../../data-access/store'

function Home() {
  return (
    <Provider store={store}>
      <div>
        <MonoLabel variant="label">Acme - <MonoText variant="heading2">Data Table component</MonoText></MonoLabel>
      <CustomTable />
      </div>
    </Provider>
  )
}

export default Home
