import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [drinksFetched, setDrinksFetched] = useState([])
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDrinks(data)
        setDrinksFetched(data.drinks)
        setLoading(false)
      })
      .catch(err => alert(`REFRESH PAGE, ${err}`))
  }, [])

  function handleUserInput(e) {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    setLoading(true)
    try {
      const re = new RegExp(userInput, 'ig')
      setDrinks({drinks:
        drinksFetched.filter(drink => drink.strDrink.match(re))
      })
      setLoading(false)
    } catch(err) {
      setDrinks('')
      setLoading(false)
    }

  },[userInput])

  return (
    <AppContext.Provider value={{
      drinks,
      loading,
      userInput,
      handleUserInput
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
