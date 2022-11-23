export interface Product {
    id: number;
    product_name: string;
    product_sale_price: number;
    product_mrp:number;
    product_description: string;
    product_unit:string;
    product_category:string;
    
    
    
  }
  
  export const products = [
    {
      id: 1,
      product_name: 'Phone XL',
      product_sale_price: 6999,
      product_mrp:7500,
      product_description: 'A large phone with one of the best screens',
      product_unit:'Device',
      product_category:'Mobile'
      
    },
    {
      id: 2,
      product_name: 'Phone Mini',
      product_sale_price: 5999,
      product_mrp:6500,
      product_description: 'A great phone with one of the best cameras',
      product_unit:'Device',
      product_category:'Mobile'
    },
    {
      id: 3,
      product_name: 'Phone Standard',
      product_sale_price: 2999,
      product_mrp:4000,
      product_description: 'A phone with a standard',
      product_unit:'Device',
      product_category:'Mobile'
    },
    {
        id:4,
        product_name:"Lenovo",
        product_sale_price:7500,
        product_mrp:8000,
        product_description:'Having 16GB internal memory',
        product_unit:'Device',
        product_category:'Mobile'
    },
    {
      id:5,
      product_name:"Macromax",
      product_sale_price:8500,
      product_mrp:9000,
      product_description:'Having 32GB internal memory',
      product_unit:'Device',
      product_category:'Mobile'
  }
  ];
  
  
 