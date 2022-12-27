
const SERVER_URL = 'http://localhost:8080';



export const environment = {
  production: true,

  API_ADD_PRODUCT: `${SERVER_URL}/addStock`,
  API_GET_PRODUCT: `${SERVER_URL}/getStock`,
  API_ADD_CUSTOMER:`${SERVER_URL}/addCustomer`,
  API_DELET_PRODUCT: `${SERVER_URL}/deleteStock`,
  API_ADD_CATEGORY: `${SERVER_URL}/addCategory`,
};
