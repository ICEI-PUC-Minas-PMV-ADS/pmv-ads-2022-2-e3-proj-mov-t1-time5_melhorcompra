import API from './webapi.services';
import { BASE_URL } from './urls';
 
export const getProcessedList = async (id, numList) => {
  try {
    return await API.get(
      `${BASE_URL}/processedList?idUsuario=${id}&lista=${numList}`
    ).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
 
export const getQtdProcessedList = async (id) => {
  try {
    return await API.get(`${BASE_URL}/processedList?idUsuario=${id}`).then(
      (response) => {
        var dados = response.data;
        let cont = 0;
        let total = 1;
        for (let i = 0; i < dados.length; i++) {
          if (i < dados.length - 1 && dados[i].lista == dados[i + 1].lista) {
            total++;
          } else {
            cont = dados[i].lista;
            total = 1;
          }
        }
        return cont;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
 
export const insertGasto = async (param) => {
  try {
    return await API.post(`${BASE_URL}/processedList`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
 
export const updateGasto = async (param) => {
  try {
    return await API.put(
      `${BASE_URL}/processedList/${param.idUsuario}`,
      param
    ).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
 
export const deleteGasto = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/processedList/${id}`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};