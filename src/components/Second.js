import { useEffect, useState } from "react";
import styled from "styled-components"


const Second = () => {
  const StyledMain = styled.div`
    width:300px;
    height:300px;
    background-color: yellow;
  `;

  const initialData = {
    'userId': 0,
    'id': 0,
    'title': '',
    'completed': false
  }

  const [data, setData] = useState(initialData)

  useEffect(() =>{
    const getJson = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => setData(json))
    }
    getJson()
  },[])


  return (
    <>
      <StyledMain>
        <div>userID:{data.userId}</div>
        <div>ID:{data.id}</div>
        <div>title:{data.title}</div>
      </StyledMain>
    </>
  )  
}

export default Second