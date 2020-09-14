import React from 'react'
import {Provider} from 'react-redux'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import store from '../client/store'
import App from '../client/components/App'

//wait for week6 for redux testing with this library
describe('App', () => {

  test('Nav has 1 logo, 1 home button and 3 links', () => {
    render(<Provider store={store}><App /></Provider>)
    
    let logo = screen.getAllByRole('logo')
    let home = screen.getAllByRole('homeButton')
    let links = screen.getAllByRole('links')
    expect(logo.length).toBe(1)
    expect(links.length).toBe(3)
    expect(home.length).toBe(1)
  })

  test('Access show auth options', () => {
    render(<Provider store={store}><App /></Provider>)

    let optionContainer = screen.getAllByRole('authOptions')
    expect(optionContainer.length).toBe(1)
  })
})

