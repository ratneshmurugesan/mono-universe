import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from './app'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />)
    expect(getByText(/Welcome/i)).toBeTruthy()
  })
})

test('true positive', async () => {
  // A true positive indicates a bug when there is one.
  render(<App />)
  // expect(screen.getByText(/wel/i)).not.toBeInTheDocument()
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument()
})

test('false positive', async () => {
  // A false positive indicates a bug when there is none.
  render(<App />)
  const user = userEvent.setup()
  await user.click(screen.getByText(/contact/i))
  // expect(screen.getByText(/Z!/i)).not.toBeInTheDocument();
  expect(screen.getByText(/contact!/i)).toBeInTheDocument()
})

test('true negative', async () => {
  // A true negative indicates no bug when there is none.
  render(<App />)
  const user = userEvent.setup()
  await user.click(screen.getByText(/contact!/i))
  expect(screen.getByText(/contact!/i)).toBeInTheDocument()
})

test('false negative', async () => {
  // A false negative indicates no bug when there is one.
  render(<App />)
  const user = userEvent.setup()
  await user.click(screen.getByText(/prototypes/i))
  expect(screen.getByText(/Prototype A/i)).toBeInTheDocument()
})
