import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function Card({ title, rating }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => { 
    console.log(`The card ${title} has been liked: ${hasLiked}`);
  }
  , [hasLiked]);



  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} 42:45<br/>{ count || null }{rating}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : 'Like'}
      </button>
    </div>
  )
}

function App() {


      return (
        <div className="card-container">
          <Card title="Star Wars" isCool={true} />
          <Card title="Avatar"/>
          <Card title="Kinds"/>


</div>
      )
}



export default App
