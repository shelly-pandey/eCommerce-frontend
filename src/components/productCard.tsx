
import { rootState } from '../redux/rootReducer';
import { Button, Card } from 'react-bootstrap';

import { addToCart } from '../redux/actions';
import Header from './navigation';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCard_() {

  type ProductParams = {
    id: string;
  };

  const {id} = useParams<ProductParams>();   //  Type 'Readonly<Params<string>>' is not assignable to type 'string'
  
  
  //let id:string = useParams() as unknown as string;
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state: rootState) => state.productsReducer.filteredProducts);
 
      // @ts-ignore
  // eslint-disable-next-line eqeqeq
  let product = filteredProducts.filter((product) => product.id == (id))[0];
  
  return (
    <div>
      <Header />
      
      <Link to={'/productlist'} className="btn btn-primary">Continue Shopping!</Link>
      <div className='my-form'>
      
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img src={product.image} height='200px' width='200px' alt={product.id} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="title">{product.category}</Card.Subtitle>
            <br></br>
            <Card.Subtitle className="title">Rating: {product.rating.rate} out of {product.rating.count} reviews</Card.Subtitle>
            <br></br>
            <Card.Subtitle className="title">DKK {product.price}</Card.Subtitle>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button onClick={() => { dispatch(addToCart(product)); }} value={product.title} variant="secondary" >Add to Cart</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}


