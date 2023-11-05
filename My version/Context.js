import React, { useContext, useCallback, useReducer, useEffect, useState } from 'react'
const AppContext = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  //Functions
  const openSideBar = () => {
    setSideBar(true)
  }
  const closeSideBar = () => {
    setSideBar(false)
  }
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const myData = await response.json()
      if (myData.drinks) {
        const newCocktails = myData.drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strGlass,
          } = item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      }
      else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchData()
  }, [searchTerm, fetchData])
  return (
    <AppContext.Provider
      value={{
        cocktails,
        loading,
        sideBar,
        searchTerm,
        openSideBar,
        closeSideBar,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, AppContext }
