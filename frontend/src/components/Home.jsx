import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Log in</h5>
    <Link to={'/Login'} className='btn btn-primary'>log in</Link>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    </div>
  )
}

export default Home
