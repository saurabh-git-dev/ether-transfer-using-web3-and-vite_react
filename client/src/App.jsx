import './App.css'
import TransactionForm from './components/TransactionForm/TransactionForm'
import ConnectWallet from './components/ConnectWallet/ConnectWallet'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'


const App = () => {
  return (
    <div className="h-screen flex items-center flex-col pt-24">
      <ConnectWallet />
      <h1 className='text-3xl'>
        Transfer Ethers
      </h1>
      <div className='w-[50rem]'>
        <TransactionForm />
      </div>
      <div>
        <TransactionHistory />
      </div>
    </div>
  )
}

export default App
