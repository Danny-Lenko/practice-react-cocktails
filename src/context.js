import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDrinks(data))
      .catch(err => alert(`REFRESH PAGE, ${err}`))
  }, [])

  return <AppContext.Provider value={{
    drinks
  }}>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
