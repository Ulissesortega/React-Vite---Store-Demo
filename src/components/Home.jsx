import './Home.css'
import '../data/data'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link to="/about">Go to About</Link>

      <div className='grid-container'>
        <link to="" />
        <Link to="/about">
        <img className='imgsize' src="../M25.jpg" alt="" />
        </Link>
        <img className='imgsize' src="../CT-343E.jpg" alt="" />
        <img className='imgsize' src="../Vanity.jpg" alt="" />
      </div>

    </div>
  )
}
