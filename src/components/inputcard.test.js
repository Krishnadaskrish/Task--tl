import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import { InputCard } from './InputCard'
jest.mock('axios')

jest.mock('./Input', () => {
    return {
        __esModule: true,
        default: function MockInput(props) {
            return <input {...props} />
        },
    }
})

jest.mock('./dropdown', () => {
    return {
        __esModule: true,
        default: function MockDropdown(props) {
            return <select {...props}></select>
        },
    }
})

jest.mock('./Button', () => {
    return {
        __esModule: true,
        default: function MockButton(props) {
            return <button {...props}></button>
        },
    }
})

describe('InputCard component', () => {
    test('submitting the form with valid data', async () => {
        axios.post.mockResolvedValueOnce({ data: 'success' })

        const { getByPlaceholderText, getByText } = render(<InputCard />)

        fireEvent.change(getByPlaceholderText('Username'), {
            target: { value: 'John' },
        })
        fireEvent.change(getByPlaceholderText('Email'), {
            target: { value: 'john@example.com' },
        })
        fireEvent.change(getByPlaceholderText('Phone'), {
            target: { value: '1234567890' },
        })
        fireEvent.change(
            getByPlaceholderText('Tell us what we should help with you'),
            { target: { value: 'Help me with something' } },
        )

        fireEvent.change(getByPlaceholderText('Select a service'), {
            target: { value: 'Option 1' },
        })
        fireEvent.change(getByPlaceholderText('Select your country'), {
            target: { value: 'America' },
        })

        fireEvent.click(getByText('Lets Chat'))

        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1))

        expect(getByText('success')).toBeInTheDocument()
    })

    test('form submission fails', async () => {
        axios.post.mockRejectedValueOnce(new Error('Submission failed'))

        const { getByPlaceholderText, getByText } = render(<InputCard />)

        fireEvent.change(getByPlaceholderText('Username'), {
            target: { value: 'John' },
        })
        fireEvent.change(getByPlaceholderText('Email'), {
            target: { value: 'john@example.com' },
        })
        fireEvent.change(getByPlaceholderText('Phone'), {
            target: { value: '1234567890' },
        })
        fireEvent.change(
            getByPlaceholderText('Tell us what we should help with you'),
            { target: { value: 'Help me with something' } },
        )

        fireEvent.change(getByPlaceholderText('Select a service'), {
            target: { value: 'Option 1' },
        })
        fireEvent.change(getByPlaceholderText('Select your country'), {
            target: { value: 'America' },
        })

        fireEvent.click(getByText('Lets Chat'))

        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1))

        expect(getByText('Submission failed')).toBeInTheDocument()
    })
})
