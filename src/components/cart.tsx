import { deleteAllFromCart, deleteFromCart, updatePrice } from '../redux/actions';
import { rootState } from '../redux/rootReducer';
import Header from './navigation';

import { InputLabel } from '@mui/material';
import { Button, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function Cart() {
  const { cartProducts } = useSelector((state: rootState) => state.cartreducer);
  const dispatch = useDispatch();

  let total = cartProducts.reduce((subtotal, product) => subtotal + (product.price * product.quantity), 0);
  let { darktheme } = useSelector((state: rootState) => state.productsReducer);


  //console.log(' cart ' + JSON.stringify(cartProducts));


  return (
    <div>
      <Header />
      <div>
        <Link to={'/productlist'} className="btn btn-primary">Continue Shopping!</Link>
      </div>
      {
        cartProducts.length === 0 &&
        <div>
          No products in your Cart
        </div>
      }

      {cartProducts.length > 0 &&
        <div>

          <Table striped bordered hover variant={darktheme ? "dark" : "light"}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>price</th>
                <th> <Button onClick={() => dispatch(deleteAllFromCart())} variant="secondary">Delete All</Button> </th>
              </tr>
            </thead>
            <tbody>
              {cartProducts && cartProducts.map((product) => (
                <tr key={product.id}>
                  <td><img src={product.image} height='200px' width='200px' alt=''></img> </td>
                  <td><h5>{product.title}</h5></td>
                  <td>

                    <InputLabel>Quantity</InputLabel>
                    <Form.Select key={product.id} name="quantity" onChange={(event: any) => dispatch(updatePrice(product, event.target.value))} defaultValue={product.quantity}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>

                  </td>
                  <td>{product.price} DKK</td>
                  <td><Button onClick={() => dispatch(deleteFromCart(product))} value={product.title} variant="secondary">Delete Item</Button></td>
                </tr>

              ))}
              <tr key="total">
                <td></td>
                <td><h5>Total Amount</h5></td>

                <td>{total}  DKK</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      }
    </div>
  )
}

