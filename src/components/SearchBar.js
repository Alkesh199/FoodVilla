import { filterData } from "../utils/helper";
import {useState} from "react";
const SearchBar = ({allRestaurents,setAllRestaurents,setRestaurents}) =>{

    const [searchValue,setSearchValue] = useState("");

    return(
          
        <div className = "flex justify-center items-center  max-w-[85%] mx-auto h-12 rounded my-12 lg:max-w-[500px]">
        <input type="text" data-testid = "search-input" className= "w-[70%] px-3 py-2 box-content border-2 border-black rounded" placeholder="search your favourite restaurent" value={searchValue} 
        onChange={
          (e)=>{
             setSearchValue(e.target.value);
          }
        }></input>
        <button data-testid="search-btn" className="ml-10 max-w-fit  h-10  bg-black text-white px-7 border rounded " onClick={()=>{
            let fData = filterData(searchValue,allRestaurents);
            setRestaurents(fData);
        }
        }>Search</button>
        {/* <h2>{searchValue}</h2> */}
    </div>

    )
}

export default SearchBar;