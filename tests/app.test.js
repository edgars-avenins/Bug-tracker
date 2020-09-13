import React from 'react'
import {Provider} from 'react-redux'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import store from '../client/store'
import App from '../client/components/App'

//wait for week6 for redux testing with this library
test('App shows...', () => {
  render(<Provider store={store}><App /></Provider>)
  return screen.debug()
    .then(data => console.log(data))
})