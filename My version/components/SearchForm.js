import React, {useRef} from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const searchValue = useRef('')
  const { setSearchTerm } = useGlobalContext()
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const updateValue = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
      <section className='searchform-box'>
          <form className='searchform' onSubmit={handleSubmit}>
              <label htmlFor="drink">Search your favourite drink!</label>
        <input
          type="text"
          name="drink"
          id="drink"
          ref={searchValue}
          onChange={updateValue}
        />
          </form>
    </section>
  )
}

export default SearchForm