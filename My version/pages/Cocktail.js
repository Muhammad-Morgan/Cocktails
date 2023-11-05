import React, { useState, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import Loading from '../components/Loading'

const Cocktail = () => {
  const [loading, setLoading] = useState(false)
  const [cocktails, setCocktails] = useState([])
  const { id } = useParams()
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const myData = await response.json()
      if (myData.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = myData.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktails = {
          name,
          image,
          category,
          glass,
          instructions,
          ingredients
        }
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  React.useEffect(() => {
    fetchData()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <div className="loading-con">
      <h1 className='loading-h1'>No cocktails!</h1>
    </div>
  }
  else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients
    } = cocktails
    return (
      <>
        <Button />
        <Sidebar />
        <div
          style={{marginBottom: '2rem' ,display: 'flex', justifyContent: 'center' }}
          className="contact-bth">
          <Link
            to='/'
            className='contact-bth-button'>
            Back to home
          </Link>
        </div>
        <section className='single-cocktail-page'>
          <article className="single-cocktail-con">
            <div className="cocktail-img-con">
              <img src={image} alt="cocktail" />
            </div>
            <div className="cocktail-info-con">
              <div className="listItem margin-bottom">
                <h4 className='margin-remove' >Name:</h4>
                <p className='margin-remove'>{ name}</p>
              </div>
              <div className="listItem margin-bottom">
                <h4 className='margin-remove' >Category:</h4>
                <p className='margin-remove'>{category }</p>
              </div>
              <div className="listItem margin-bottom">
                <h4 className='margin-remove' >Glass:</h4>
                <p className='margin-remove'>{glass }</p>
              </div>
              <div
                style={{ display: 'block' }}
              className="listItem">
                <h4 className='margin-remove' >Instructions:</h4>
                <p className='margin-remove'>{instructions}</p>
              </div>
              <div
                  style={{display: 'block'}}
              className="listItem">
                <h4 className='margin-remove' >Ingredients:</h4>
                {ingredients.map((item, index) => {
                  return <p
                  style={{display: 'block'}}
                  className='margin-remove' key={index}>
                    {item}
                  </p>
                })}
              </div>
            </div>
          </article>
        </section>
      </>
    )

  }
}

export default Cocktail