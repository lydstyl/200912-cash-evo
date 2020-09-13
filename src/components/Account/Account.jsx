import React from 'react'

import './style.css'

const getLastAndJustBeforeAmount = (history) => {
  const lastAmount = history[0]
  const justBeforeAmount = history[1]

  return { lastAmount, justBeforeAmount }
}

export const Account = ({
  account: { id, name, description, link, logo, min, max, history },
}) => {
  const amounts = getLastAndJustBeforeAmount(history)
  const { lastAmount, justBeforeAmount } = amounts
  const diff = lastAmount.amount - justBeforeAmount.amount
  let percent = lastAmount.amount / justBeforeAmount.amount
  percent = percent - 1
  percent = percent * 100
  percent = percent.toFixed(2)

  return (
    <div className='card'>
      <img src={logo} className='card-img-top' alt={name} />

      <div className='card-body'>
        <h5 className='card-title'>
          {name} min: {min} max {max} last {lastAmount.amount} from{' '}
          {lastAmount.date} diff: {diff} percent: {percent}
        </h5>

        <p className='card-text'>{description}</p>
        {/* <pre className='card-text'>{JSON.stringify(history, null, 4)}</pre> */}

        <a href={`/edit-account/${id}`} className='btn btn-primary'>
          Détail / Éditer
        </a>
      </div>
    </div>
  )
}
