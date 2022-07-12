import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinks } = useGlobalContext()
  console.log(drinks)
  // const allDrinks = 


  if (!drinks) {
    return <Loading />
  }

  return (
    <section className="section">
      <h1 className="section-title">Cocktails</h1>
      <div className="cocktails-center">

      </div>
    </section>
  )
}

export default CocktailList
