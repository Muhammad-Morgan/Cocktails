import React from 'react'
import Button from '../components/Button'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='home-div'>
      <Button />
      <SearchForm />
      <Sidebar />
      <CocktailList />
    </div>
  )
}

export default Home