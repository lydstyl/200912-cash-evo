import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getAccount } from '../../utils/getAccounts'

export const EditAccount = () => {
  const [account, setAccount] = useState(null)

  const params = useParams()
  const { accountId } = params

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const account = await getAccount(accountId)

        setAccount(account)
      } catch (error) {
        console.log('fetchAccounts -> error', error)
      }
    }

    fetchAccount()
  }, [])

  if (account) {
    const { id, name, description, link, logo, min, max, history } = account

    console.log('EditAccount -> name', name)
  }

  return <div>{account && <p>il y a un account</p>}</div>
}
