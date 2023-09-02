import {useEffect, useState} from 'react';
import  axios  from 'axios';
import AdBanner from './AdBanner'
import RecipeDisplay from './RecipeDisplay';
import { BiSearchAlt2 } from 'react-icons/bi';
import "./homeComponents.css";



const HomeScreen = () => {  
  const apiUrl = `https://recipes.devmountain.com/recipes`
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch ] = useState('');
  
  const getRecipes = () => {
    axios.get(apiUrl)
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
        .catch(e=>console.log("Error getting data from API "+ e))
}

  useEffect(() => {
    getRecipes()
  },[])


  return (
    <div>
      <AdBanner />

      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <div className='div-search'>
        <span className="span-search">
          <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a Recipe"
          />
        </span>
      </div>


      <RecipeDisplay recipes={recipes} search={search} setSearch={setSearch}/>
    </div>
  )
}

      
export default HomeScreen