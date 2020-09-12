import React, { useEffect, useState } from 'react'

import { getAccounts } from '../../utils/getAccounts'

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

  console.log(accounts)

  return (
    <div>
      <h1>Home</h1>
      {accounts && (
        <div className='accounts'>
          {accounts.map((a) => (
            <div key={a.id}>{a.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}
