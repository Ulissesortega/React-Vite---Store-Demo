import './About.css';
import { Link } from 'react-router-dom';
import Products from '../data/data'; // Import the product data

export default function About() {
  return (
    <div>
      <p>About</p>
      <Link to="/">Go to Home</Link>

      <div className="grid-container">
        {/* Loop through products and create a link for each one */}
        {Products.map((product) => (
          <Link key={product.id} to={`/detail/${product.id}`}>
            <img className="imgsize" src={`../Kitchens/${product.name}.jpg`} alt={product.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
