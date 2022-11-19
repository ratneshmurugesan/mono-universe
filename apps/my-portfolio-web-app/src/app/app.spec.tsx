import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

describe('App', () => {
  const AppToTest = (
    <Router>
      <App />
    </Router>
  )
  it('should render successfully', () => {
    const { baseElement } = render(AppToTest)
    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(AppToTest)
    expect(getByText(/who am i/i)).toBeTruthy()
  })
})

test('true positive', async () => {
  const AppToTest = (
    <Router>
      <App />
    </Router>
  )

  // A true positive indicates a bug when there is one.
  render(AppToTest)
  // expect(screen.getByText(/wel/i)).not.toBeInTheDocument()
  expect(screen.getByText(/human/i)).toBeInTheDocument()
})

test('false positive', async () => {
  const AppToTest = (
    <Router>
      <App />
    </Router>
  )

  // A false positive indicates a bug when there is none.
  render(AppToTest)
  const user = userEvent.setup()
  await user.click(screen.getByText(/contact/i))
  // expect(screen.getByText(/Z!/i)).not.toBeInTheDocument();
  expect(screen.getByText(/mobile/i)).toBeInTheDocument()
})

test('true negative', async () => {
  const AppToTest = (
    <Router>
      <App />
    </Router>
  )

  // A true negative indicates no bug when there is none.
  render(AppToTest)
  const user = userEvent.setup()
  await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/about/i)).toBeInTheDocument()
})

test('false negative', async () => {
  const AppToTest = (
    <Router>
      <App />
    </Router>
  )

  // A false negative indicates no bug when there is one.
  render(AppToTest)
  const user = userEvent.setup()
  await user.click(screen.getByText(/prototypes/i))
  expect(screen.getByText(/simple/i)).toBeInTheDocument()
})
