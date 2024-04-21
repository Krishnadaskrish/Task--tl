import React, { useState } from 'react'
import './Card.css'
import { Input } from './Input'
import CustomDropdown from './dropdown'
import { Button } from './Button'
import { FaLocationDot, FaInstagram, FaPinterest } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import imgBull from '../images/bull.png'
import axios from 'axios'

export const InputCard = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        service: '',
        country: '',
        message: '',
    })

    const handleInputChange = (name, value) => {
        console.log('changing', value)
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleServiceSelect = (service) => {
        setFormData({
            ...formData,
            service: service,
        })
    }

    const handleSelectedRegion = (region) => {
        setFormData({
            ...formData,
            country: region,
        })
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3003/feedback',
                formData,
            )
            console.log(response.data)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const services = ['Option 1', 'Option 2', 'Option 3']
    const regions = ['America', 'India', 'Canada']

    return (
        <div className="card1">
            <h1 className="head">Get in touch</h1>
            <div className="container1">
                <Input
                    type={'text'}
                    placeholder={'username'}
                    labels={'Username'}
                    onChange={(value) => handleInputChange('username', value)}
                />
                <Input
                    type={'email'}
                    placeholder={'email'}
                    labels={'Email'}
                    onChange={(value) => handleInputChange('email', value)}
                />
                <Input
                    type={'tel'}
                    placeholder={'phone'}
                    labels={'Phone'}
                    onChange={(value) => handleInputChange('phone', value)}
                />
                <CustomDropdown
                    options={services}
                    placeholder={'Select a service'}
                    onSelect={handleServiceSelect}
                />
                <CustomDropdown
                    options={regions}
                    placeholder={'Select your country'}
                    onSelect={handleSelectedRegion}
                />
                <Input
                    type={'text'}
                    h={'40px'}
                    placeholder={'Tell us what we should help with you'}
                    labels={'How should we help you?'}
                    onChange={(value) => handleInputChange('message', value)}
                />

                <div
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        display: 'flex',
                    }}
                >
                    <Button value={'Lets Chat'} onClick={handleSubmit} />
                </div>
                <div
                    style={{
                        gap: '10px',
                        width: '100%  ',
                        justifyContent: 'center',
                        alignContent: 'center',
                        display: 'flex',
                    }}
                >
                    <FaLocationDot style={{ color: 'white' }} />
                    <FaFacebook style={{ color: 'blue' }} />
                    <FaInstagram style={{ color: 'red' }} />
                    <FaPinterest style={{ color: 'red' }} />
                </div>

                <div
                    style={{
                        width: '100%  ',
                        paddingBlock: '20px',
                        gap: '4px',
                        fontSize: '10px',
                        fontFamily: 'sans-serif',
                        color: 'white',
                        justifyContent: 'center',
                        alignContent: 'center',
                        display: 'flex',
                        backgroundColor: 'grey',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    <span>
                        to know more about our service
                        <button
                            style={{
                                color: 'white',
                                backgroundColor: 'blue',
                                padding: '3px',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                        >
                            technologies
                        </button>
                    </span>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        powered by
                        <img
                            src={imgBull}
                            style={{ height: '28px', width: '28px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
