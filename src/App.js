import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadPosts></LoadPosts>
    </div>
  );
}

function Post(props){

  return(
    <div className='posts'>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}
// https://jsonplaceholder.typicode.com/posts
function LoadPosts(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);


  return(
    <div>
      <h3>Load Posts</h3>
      {
        posts.map(post => <Post title = {post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);

  const handleCounter = () =>{
    setCount(count+1);
  }

  return(
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleCounter}>Increase</button>
    </div>
  )
}
export default App;
