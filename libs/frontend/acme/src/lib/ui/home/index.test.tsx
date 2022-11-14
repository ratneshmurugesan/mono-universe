import { render, screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import Home from '.'
import { CustomCheckbox } from '../components/atoms'

describe('Acme.Inc', () => {
  const store = configureStore({
    reducer: {},
  })
  test('should render acme component name', () => {
    render(<Home />)
    const targetElement = screen.getByText(/Data Table/i)
    expect(targetElement).toBeInTheDocument()
  })

  test('should render row checkbox correctly', () => {
    render(
      <Provider store={store}>
        <CustomCheckbox rowObj={{}} />
      </Provider>,
    )
    const checkBoxElement = screen.getByRole('checkbox')
    expect(checkBoxElement).toBeInTheDocument()
  })

  test('should render no data', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    const textElement = screen.getByText('No Data!')
    expect(textElement).toBeInTheDocument()
  })

  test('should render header title correctly', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    const textElement = await screen.findByText('title', { selector: 'span' })
    expect(textElement).toBeInTheDocument()
  })
})
