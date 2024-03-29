import React, {useState, useEffect} from 'react';

  function SearchBar() {
    const [inputValue, setInputValue] = useState ("")
    const [searchResult, setSearchResult] = useState ([])
   
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {

        const response = await fetch (`${URL}`)
          if (!response.ok) {
            throw new Error ('Error')
        }
         const data= await response.json()
         setSearchResult (data.meals)

      } catch (error) {
      console.error('error', error)
      }
    }

   return (
    
    <div>
    <form onSubmit = {handleSubmit}>
        <label> Food item </label>
        <input
         type= "text"
          placeholder="search"
           value={inputValue}
             onChange = {handleChange} />

<button type="submit"> Sök</button> 
</form>

    <ul>
           
           {searchResult && searchResult.map((result, index) => (
           <li key ={index}> {result.strMeal} </li>
           ))}
           
           </ul>
  </div> 
  
  )
           }
export default SearchBar