import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import Loading from './Loading'

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext()
  if (loading) {
  return  <Loading />
  }
  if (cocktails.length <1) {
    return <div className="loading-con">
    <h1 className='loading-h1'>No cocktails!</h1>
  </div>
  }
    return (
      <section className='cocktaillist-con'>
        <h3>Pick What you Want!</h3>
        <article className="list-cont">
          {cocktails.map(({ id, name, image, glass }) => {
         return <div key={id} className="list-item">
              <img src={image} alt="cocktail" />
              <div className="list-item-info">
                <h4> {name} </h4>
                <p> {glass} </p>
              </div>
              <div className="alone-link">
                <Link
                  to={`/cocktail/${id}`}
                  className='details-btn'>
                  Details
                </Link>
              </div>
            </div>
            
          })}
        </article>
      </section>
    )

}

export default CocktailList