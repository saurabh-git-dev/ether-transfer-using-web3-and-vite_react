import React, { useContext } from 'react'
import { TransactionContext } from '../../context/TransactionContext'


const TransactionHistory = () => {
    const { transactions, transactionCount } = useContext(TransactionContext)
    return (
        <div>
            <h1 className='text-3xl'>
                Transactions ({transactionCount})
            </h1>
            <div className='w-[50rem]'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2'>To</th>
                            <th className='border px-4 py-2'>Amount</th>
                            <th className='border px-4 py-2'>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td className='border px-4 py-2'>{transaction.receiver}</td>
                                    <td className='border px-4 py-2'>{parseInt(transaction.amount._hex) / (10 ** 18)}</td>
                                    <td className='border px-4 py-2'>{transaction.remark}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default TransactionHistory