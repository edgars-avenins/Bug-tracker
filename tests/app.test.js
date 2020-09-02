import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import App from '../client/components/App'

//wait for week6 for redux testing with this library
test('App shows...', () => {
  render(<App store={{}}/>)
  return screen.debug()
    .then(data => console.log(data))
})