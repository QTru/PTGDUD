import React, {useState, useRef, useEffect, useMemo} from 'react'
import './ProductSearch.css'
import mockData from './MOCK_DATA.json'

function ProductSearch() {
  let startTime = useRef(new Date().getTime());

  const [filtersState, setFiltersState] = useState({name: '', minPrice: -1, maxPrice: -1});
  const referencedFilters = useRef({name: '', minPrice: -1, maxPrice: -1});
  
  const updateReferencedFilters = event => {
    let element = event.target;
    
    switch(element.id) {
      case 'name':
        referencedFilters.current.name = element.value.length === 0? '' : element.value;
        break;
      case 'min-price':
        referencedFilters.current.minPrice = element.value.length === 0 || parseFloat(element.value) < 0? -1 : parseFloat(element.value);
        break;
      case 'max-price':
        referencedFilters.current.maxPrice = element.value.length === 0 || parseFloat(element.value) < 0? -1 : parseFloat(element.value);
        break;
    }
  };

  const updateFiltersStates = () => { setFiltersState({...referencedFilters.current}); };
        
  const filteredProducts = useMemo(() => {
    let {name, minPrice, maxPrice} = filtersState;
    
    return mockData.filter(product => {
      if(name.length > 0 && !product.product_name.toLowerCase().includes(name.toLowerCase()))
        return false;
      if(minPrice >= 0 && product.price < minPrice)
        return false;
      if(maxPrice >= 0 && product.price > maxPrice)
        return false;
      
      return true;
    });
  }, [filtersState]);

  const calculateTotalPrice = useMemo(() => filteredProducts.reduce((total, product) => total + product.price, 0).toFixed(2), [filteredProducts]);
    
  useEffect(() => {
    console.log('Total time (miliseconds): ' + (new Date().getTime() - startTime.current));
    startTime.current = new Date().getTime();
  })
  
  return (
    <div className='product-search'>
      <form>
        <label htmlFor="name">Name: </label><input type="text" name="name" id="name" autoComplete='on' onChange={updateReferencedFilters} />
        <label htmlFor="min-price">Min Price: </label><input type="number" name="min-price" id="min-price" onChange={updateReferencedFilters} />
        <label htmlFor="max-price">Max Price: </label><input type="number" name="max-price" id="max-price" onChange={updateReferencedFilters} />
        <button type="button" onClick={updateFiltersStates}>Filter</button>
      </form>

      <div className='product-list'>
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => 
              <tr key={product.id}><td>{product.id}</td><td>{product.product_name}</td><td>${product.price}</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <p>Total Price: ${calculateTotalPrice}</p>
    </div>
  )
}

export default ProductSearch