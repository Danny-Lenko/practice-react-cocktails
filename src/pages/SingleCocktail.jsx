import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState({})
  const [loading, setLoading] = useState(false)

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions
  } = drink

  useEffect(() => {
    setLoading(true)
    fetch(url+id)
      .then(res => res.json())
      .then(data => {
        setDrink(data.drinks[0])
        setLoading(false)
      })
  }, [])

  function getIngredients(data) {
    return Object.entries(data)
      .filter(item => item[0].match(/ingredient/i) && item[1])
      .map(item => item[1]).join(', ')
  }

  if (loading) {
    return <Loading />
  }

  return (
    <section className="cocktail-section section">
      <Link to="/" className="btn btn-primary">Back Home</Link>
      <h1>{strDrink}</h1>
      <article className="drink">
        <img src={strDrinkThumb} alt="cocktail"/>

        <div>
          <p className="drink-info">
            <span className="drink-data">
              Name:
            </span>
            {strDrink}
          </p>

          <p className="drink-info">
            <span className="drink-data">
              Category:
            </span>
            {strCategory}
          </p>

          <p className="drink-info">
            <span className="drink-data">
              Info:
            </span>
            {strAlcoholic}
          </p>

          <p className="drink-info">
            <span className="drink-data">
              Glass:
            </span>
            {strGlass}
          </p>

          <p className="drink-info">
            <span className="drink-data">
              Instructions:
            </span>
            {strInstructions}
          </p>

          <p className="drink-info">
            <span className="drink-data">
              Ingredients:
            </span>
            {getIngredients(drink)}
          </p>
        </div>
      </article>
    </section>
  )
}

export default SingleCocktail
