import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constant'

export const TransactionContext = React.createContext({})

const { ethereum } = window

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const contract = new ethers.Contract(contractAddress, contractABI, provider.getSigner())
    // console.log(contract)
    return contract
}


const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [loading, setLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(0)
    const [transactions, setTransactions] = useState([])


    const checkIfWalletConnected = async () => {
        try {
            if (!ethereum) alert('Please connect to your wallet')
            const accounts = await ethereum.request({ method: 'eth_accounts' })
            // console.log(accounts)
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.error("checkIfWalletConnected : ", error)
        }
    }

    useEffect(() => {
        checkIfWalletConnected()
    }, [])

    const connectToWallet = async () => {
        try {
            if (!ethereum) alert('Please connect to your wallet')
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            // console.log(accounts)
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.error("connectToWallet : ", error)
        }
    }

    const transferAmount = async ({ address, amount, remark }) => {
        const contract = getEthereumContract()
        const parsedAmount = ethers.utils.parseEther(amount)
        await ethereum.request({
            method: 'eth_sendTransaction', params: [{
                from: currentAccount,
                to: address,
                value: parsedAmount._hex,
            }]
        })
        const transactionHash = await contract.addTransaction(address, parsedAmount, remark)
        setLoading(true)
        console.log("Loading : ", transactionHash)
        await transactionHash.wait()
        setLoading(false)
        console.log("Success : ", transactionHash)
        // alert("Transaction Successful")

        getAllTransactions()
        getTransactionsCount()
    }


    const getAllTransactions = async () => {
        const contract = getEthereumContract()
        const transactions = await contract.getTransactions()
        console.log(transactions)
        setTransactions(transactions)
    }
    const getTransactionsCount = async () => {
        const contract = getEthereumContract()
        const transactionsCount = await contract.getTransactionCount()
        setTransactionCount(transactionsCount.toNumber())
    }

    useEffect(() => {
        if (currentAccount) {
            getTransactionsCount()
            getAllTransactions()
        }
    }, [currentAccount])



    return (
        <TransactionContext.Provider value={{
            connectToWallet,
            currentAccount,
            transferAmount,
            transactionCount,
            transactions,
            loading
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionProvider