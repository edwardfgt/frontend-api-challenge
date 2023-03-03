import { useEffect } from "react";

export default function PostsFromApi(){
  useEffect(() => {
    console.log('Page loaded')
  }, [])
  return <p> Here is a post</p>
}

// const URL = 'https://chitter-backend-api-v2.herokuapp.com/peeps';
// useEffect(() => {
//   const fetchData = async () => {
//     const result = await fetch(URL)
//     console.log(result)
//   }
//   fetchData();
// }, [])