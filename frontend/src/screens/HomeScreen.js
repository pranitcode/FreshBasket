import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import ProductFilter from './ProductFillter'


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  console.log(productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
    
  }, [dispatch, keyword, pageNumber])

  
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
 }
 
  const filterproducts = products.filter(expense => {
    
    
    // return expense.category === filteredYear;
   if (expense.category === filteredYear) {
       return expense
    } else if ( filteredYear === "All") {
      return products
    }
   
  });


 let something = <p>No expenses found</p>
 
  if (filterproducts.length > 0) {
   something = filterproducts.map((product) => (
      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product} />
      </Col>
    ));
  };
  
  return (
    <>
      <Meta />
      {!keyword ? (

        <ProductCarousel/>
      
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
     <ProductFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <h1>Fresh vegetables ☘ and Fruits🍒</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {something}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen

