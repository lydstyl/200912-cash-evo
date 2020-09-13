const accounts = [
  {
    id: '1',
    name: 'ING',
    description: 'compte pour les courses',
    link: 'https://m.ing.fr/secure/login/pin',
    logo:
      'data:image/png;base64,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',
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
    description: 'compte pour Freelance',
    link:
      'https://www.credit-agricole.fr/ca-norddefrance/particulier/acceder-a-mes-comptes.html',
    logo:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/langfr-280px-Cr%C3%A9dit_Agricole.svg.png',
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

export const getAccount = async (id) => {
  console.log('getAccount -> id', id)

  try {
    const data = await accounts[id]
    console.log('getAccount -> data', data)
    return data
  } catch (error) {
    console.log('getAccounts -> error', error)
  }
}
