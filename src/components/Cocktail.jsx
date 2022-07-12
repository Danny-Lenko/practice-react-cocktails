import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
  idDrink
}) => {
  return (
    <article className="cocktail">
      <img src={strDrinkThumb} alt="cocktail"/>
      <footer className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link className="btn btn-primary" to={`/cocktail/${idDrink}`} >Details</Link>
      </footer>
    </article>
  )
}

export default Cocktail
