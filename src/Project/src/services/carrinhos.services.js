import API from './webapi.services';
import {BASE_URL} from './urls';

export const getLista = async () => {
  try{
    return await API.get(`${BASE_URL}/carts_products`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertLista = async (param) => {
  try{
    return await API.post(`${BASE_URL}/carts_products`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateLista = async (param) => {
  try{
    return await API.put(`${BASE_URL}/carts_products/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deleteLista = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/carts_products/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}