import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinks, loading } = useGlobalContext()
  console.log(drinks.drinks)
  const allDrinks = drinks.drinks ? drinks.drinks.map(drink => (
    <Cocktail { ...drink } />
  )) : ''

  if (loading) {
    return <Loading />
  }

  return (
    <section className="section">
      <h1 className="section-title">Cocktails</h1>
      <div className="cocktails-center">
        {allDrinks}
      </div>
    </section>
  )
}

export default CocktailList
