
import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult/SearchResult";



export const BASE_URL = "http://localhost:9000";

const App = () => {
const [data ,setData] = useState(null);
const [loading , setLoading] = useState(false);
const [error ,setError] =useState(null);
const [filterData,setFilterData] = useState(null);
const [selectButton , setSelectButton] = useState("all");




useEffect(()=>{


  const fetchFoodData = async ()=>{

    setLoading(true);
  
    try {
  
      const responce =  await fetch (BASE_URL)
  
  const json = await responce.json();
  
  setFilterData(json);
  setData(json);
  setLoading(false);
      
    } catch (error) {
        setError("Unable to fetch DATA")
    }
  
  }
  fetchFoodData();



} ,[])


const filterFood = (type) =>{

if(type == "all"){

 setFilterData(data);
  setSelectButton("all");
  return;

}
const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
setFilterData(filter);
setSelectButton(type);
}


if (error) return <div>{error}</div>
if (loading) return <div>loading......</div>

const searchFood = (e) =>{
  const searchValue = e.target.value;

    if (searchValue == ""){
      setFilterData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())
  );
setFilterData(filter);

}

  return (
  
  <>
   <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.png" alt="logo"></img>
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="search food"></input>
        </div>
        </TopContainer>

        <FilterContainer>
          <Button onClick={()=> filterFood("all")}>All</Button>
          <Button onClick={()=> filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={()=> filterFood("lunch")}>Lunch</Button>
          <Button  onClick={()=> filterFood("dinner")}>Dinner</Button>
        </FilterContainer>

        
        </Container>

     <SearchResult data={filterData}></SearchResult>
  </>
  
 




)
  
  
  
};

export default App;

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;

`;

const TopContainer = styled.section`
min-height:140px;
display: flex;
justify-content: space-between;
padding:16px;
align-items: center;

.search{
  input{


      background-color: transparent;
  border: 1px solid red;
  color:white;
  border-radius:5px;
  height:40px;
  font-size:16px;
  padding:0 10px;
}
  }


`;

const FilterContainer = styled.section`

  display:flex;
  justify-content:center;
  gap:12px;
padding-bottom:40px;

`;


export const Button = styled.button`
background: #ff4343;

border-radius: 5px ;

padding: 6px 12px;
border:none;
color:white;


`;


