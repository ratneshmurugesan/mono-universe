import { render, screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import Home from '.'
import { CustomCheckbox } from '../components/atoms'
import { tableSlice } from '../../data-access/store/slice'
import { ReactElement } from 'react'

export function renderWithProviders(ui: ReactElement) {
  const store = configureStore({ reducer: { tableSlice: tableSlice.reducer } })
  function Wrapper({ children }: { children: JSX.Element }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper }) }
}

describe('Acme.Inc', () => {
  test('should render acme component name', () => {
    renderWithProviders(<Home />)
    const targetElement = screen.getByText(/Data Table/i)
    expect(targetElement).toBeInTheDocument()
  })

  test('should render row checkbox correctly', () => {
    renderWithProviders(<CustomCheckbox rowObj={{}} />)
    const checkBoxElement = screen.getByRole('checkbox')
    expect(checkBoxElement).toBeInTheDocument()
  })

  test('should render no data', () => {
    renderWithProviders(<Home />)
    const textElement = screen.getByText('No Data!')
    expect(textElement).toBeInTheDocument()
  })

  test('should render header title correctly', async () => {
    renderWithProviders(<Home />)
    const textElement = await screen.findByText('title', { selector: 'span' })
    expect(textElement).toBeInTheDocument()
  })
})
