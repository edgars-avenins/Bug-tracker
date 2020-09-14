import React from 'react'
import {Provider} from 'react-redux'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import store from '../client/store'

import App from '../client/components/App'
import Access from '../client/components/Access'

describe('Access', () => {

    //these do not work properly, props on Access ignored
    test('Auth false shows sign up & log in', () => {
        render(<Provider store={store}>
            <App>
            <Access auth={false}/>
            </App>
        </Provider>)
        
        let register = screen.getAllByRole('register')
        let login = screen.getAllByRole('login')


        expect(register.length).toBe(1)
        expect(login.length).toBe(1)

        
        expect.assertions(2)
    })

    test('Auth true shows profile & home', () => {
        render(<Provider store={store}>
            <App>
            <Access auth={true}/>
            </App>
        </Provider>)
        
        let profile = screen.getAllByRole('profile')
        let logout = screen.getAllByRole('logout')
        expect(profile.length).toBe(1)
        expect(logout.length).toBe(1)
        
        expect.assertions(2)
    })
})