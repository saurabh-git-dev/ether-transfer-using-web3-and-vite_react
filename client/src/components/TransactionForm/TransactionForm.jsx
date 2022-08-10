import React from 'react'
import { useState, useContext } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import Loader from '../Loader/Loader'
const EtherTransferForm = () => {
    const { transferAmount, loading } = useContext(TransactionContext)
    const [message, setMessage] = useState('')

    const [formData, setFormData] = useState({
        address: '',
        amount: '',
        remark: ''
    })

    const handleChange = (e) => {
        console.log(e.target.name)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { address, amount, remark } = formData
        
        if (address === '' || amount === '' || remark === '') {
            setMessage('Please fill all the fields')
        }
        
        setMessage('')
        await transferAmount(formData)
        setMessage(`${amount} ethers transferred successfully to ${address.substring(0, 6)}...`)
        setFormData({
            address: '',
            amount: '',
            remark: ''
        })

    }


    return (
        <div>

            <form action="#">
                <div className="container px-5 py-5 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-col -m-2">
                            <div className="p-2 w-full">
                                <div className="relative flex flex-col">
                                    <label htmlFor="address" className="leading-7 text-left text-sm text-gray-600">To (Address)</label>
                                    <input type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative flex flex-col">
                                    <label htmlFor="amount" className="leading-7 text-left text-sm text-gray-600">Amount</label>
                                    <input type="number" id="amount" name="amount" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative flex flex-col">
                                    <label htmlFor="remark" className="leading-7 text-left text-sm text-gray-600">Remark</label>
                                    <input type="text" id="remark" name="remark" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex items-center justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={(e) => handleSubmit(e)}>
                                    {
                                        loading ?
                                            <Loader />
                                            :
                                            <span>Transfer</span>
                                    }
                                </button>
                            </div>

                            <div className='h-16'>
                                {
                                    message || ''
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default EtherTransferForm