import styles from '@/styles/wallet.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Image from 'next/image'
import BankLogo from '../../../public/favicon.ico'

export default function WalletBar({ activityData }) {
  return (
    <div className="mx-auto flex flex-col max-w-7xl justify-center px-4 lg:px-8 lg:flex-row 1080p:max-w-[1500px]">
      <div className="flex flex-col lg:w-[30%] font-headings font-semibold py-10 lg:py-24">
        <div className={styles.walletBalance}>
          <div className="text-2xl mt-3 mb-4">
            Wallet Balance
          </div>
          <div className="text-4xl mt-4 mb-3">
            $100.00 CAD
          </div>
        </div>
        <div className={styles.modifyWallet}>
          Add Funds
          <AddCircleOutlineIcon />
        </div>
        <div className={styles.modifyWallet}>
          Withdraw Funds
          <RemoveCircleOutlineIcon />
        </div>

        <div className={styles.accounts}>
          <div className="text-lg border-b px-8 pt-4 pb-3">
            Linked Accounts
          </div>
          <div className={styles.bank_wallet}>
            <Image src={BankLogo} width={24} height={24} alt='Bank Logo' />
            TD Canada Trust
          </div>
        </div>
      </div>


      <div className="w-full lg:w-[70%] font-headings font-semibold py-10 lg:p-24 lg:pr-8">
        <h2 className="text-4xl text-center lg:text-left">Account Activity</h2>

        <div className="flex flex-col bg-white my-9 rounded-3xl">
          {activityData.slice(0, 10).reverse().map(activity => {
            return (
              <div key={activity.id} className={styles.activity}>
                <div className="flex flex-col">
                  <div className="text-lg">
                    {activity.type}
                  </div>
                  <div className="flex flex-col mt-6 lg:flex-row">
                    <div className="font-dText font-medium mr-6">
                      <span className='font-semibold'>ID:</span> {activity.id}
                    </div>
                    <div className="font-dText font-medium">
                      <span className='font-semibold'>Date:</span> {activity.date}
                    </div>
                  </div>
                </div>
                <div className="font-dText font-medium text-end">
                  ${activity.amount} CAD
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}