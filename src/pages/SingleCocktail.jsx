import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url+id)
      .then(res => res.json())
      .then(data => {
        setDrink(data.drinks)
        setLoading(false)
      })
  }, [])

  console.log(drink)

  if (loading) {
    return <Loading />
  }

  return (
    <section className="cocktail-section section">
      <Link to="/" className="btn btn-primary">Back Home</Link>
      <h1>{drink[0].strDrink}</h1>
    </section>
  )
}

export default SingleCocktail
