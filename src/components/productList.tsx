import { rootState } from '../redux/rootReducer';
import { addToCart, productByCategory } from '../redux/actions';
import Header from './navigation';
import { useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Select from '@mui/material/Select';
import { InputLabel, MenuItem } from '@mui/material';
import '../App.css';


export default function ProductList() {
  
  const dispatch = useDispatch();
  const products = useSelector((state: rootState) => state.productsReducer.filteredProducts);
  let filteredProducts = products;
  let { darktheme } = useSelector((state: rootState) => state.productsReducer);

  const handleCategorySelect = (event: any) => {
    dispatch(productByCategory(event.target.value));
  };
  return (
    <>
      <Header />

      <InputLabel>Filter By Categories

        <Select name="categories" onChange={handleCategorySelect} defaultValue="All">
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="men's clothing">Men's Clothing</MenuItem>
          <MenuItem value="women's clothing">Women's Clothing</MenuItem>
          <MenuItem value="jewelery">Jewelery</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
        </Select>
      </InputLabel>

      <div className='my-form'>
        {filteredProducts && filteredProducts.map((product) => (


          <Card key={product.id} style={{ width: '18rem' }} bg={darktheme ? 'dark' : 'light'} text={darktheme ? 'white' : 'dark'}>
            <Card.Img src={product.image} height='200px' width='200px' alt={product.id} />
            <Card.Body>
              <Card.Title><Link to={`/detail/${product.id}`}>{product.title}</Link></Card.Title>
              <Card.Subtitle className="title">{product.category}</Card.Subtitle>
              <br></br>
              <Card.Subtitle className="title">DKK {product.price}</Card.Subtitle>
              <br></br>
              <Card.Text >
              <Button onClick={() => { dispatch(addToCart(product)); }} value={product.title} variant="secondary" >Add to Cart</Button>
              </Card.Text>
              
            </Card.Body>
          </Card>

        ))}
      </div>
    </>
  )
}