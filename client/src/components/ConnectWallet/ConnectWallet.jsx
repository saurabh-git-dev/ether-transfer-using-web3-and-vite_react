import React, { useContext } from 'react'
import { TransactionContext } from '../../context/TransactionContext'

const ConnectWallet = () => {
    const { connectToWallet, currentAccount } = useContext(TransactionContext)
    // const connectToWallet = () => {
    // }

    return (
        <div>
            <div className="p-2 w-full">
                {
                    !currentAccount &&
                    <button
                        onClick={connectToWallet}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        {

                        }
                        Connect Wallet
                    </button>
                }
            </div>

            <div className="p-2 w-full h-16">
                {
                    currentAccount &&
                    <div className="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Your Address : {currentAccount}
                    </div>

                }
            </div>
        </div>
    )
}

export default ConnectWallet