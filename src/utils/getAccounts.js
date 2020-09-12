const accounts = [
  {
    id: '1',
    name: 'ING',
    min: 1000,
    max: 2000,
    history: [
      { date: '2020-09-01', amount: 1455, comment: "J'ai mieux gagné" },
      { date: '2020-08-01', amount: 1355, comment: 'gain normal' },
      { date: '2020-07-01', amount: 1400, comment: 'gain moindre' },
    ],
  },
  {
    id: '2',
    name: 'CA',
    min: 1200,
    max: 2200,
    history: [
      {
        date: '2020-09-01',
        amount: 1500,
        comment: 'On ma donné 100€',
      },
      { date: '2020-08-01', amount: 1300, comment: 'achat du PI' },
      { date: '2020-07-01', amount: 1400, comment: 'mois normal' },
    ],
  },
]

export const getAccounts = async () => {
  try {
    const data = await accounts
    return data
  } catch (error) {
    console.log('getAccounts -> error', error)
  }
}
