import React, { useEffect, useState } from 'react'

import { getAccounts } from '../../utils/getAccounts'

import { Account } from '../Account/Account'

export const Home = () => {
  const [accounts, setAccounts] = useState(null)

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const accounts = await getAccounts()

        setAccounts(accounts)
      } catch (error) {
        console.log('fetchAccounts -> error', error)
      }
    }

    fetchAccounts()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {accounts && (
        <div className='accounts'>
          {accounts.map((a) => (
            <Account key={a.id} account={a} />
          ))}
        </div>
      )}
    </div>
  )
}
