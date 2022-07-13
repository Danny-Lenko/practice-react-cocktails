import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { 
    userInput,
    handleUserInput
   } = useGlobalContext()

  return (
    <section className="search section">
      <form className="search-form">
        <div className="form-control">
          <label>
            Search Your Favorite Cocktail
            <input 
              value={userInput} 
              type="text"
              onChange={ (e) => handleUserInput(e) }
            />
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
