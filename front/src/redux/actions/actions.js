import{
    ADD_FAV,
    REMOVE_FAV,
    FILTER,
    ORDER
} from "./actions-type";
import axios from "axios";


export const addFav= (character) => {
      const endpoint = '/rickandmorty/fav';
      return async (dispatch)=>{
        try {
           const {data}= await axios.post(endpoint, character)
           return  dispatch({type: ADD_FAV, payload: data });
        } catch (error) {
           error.message  
        } 
      }
   } 

 
export const removeFav = (id) => {
    const endpoint = '/rickandmorty/fav/' + id;
    return async (dispatch)=>{
      try {
         const {data} =  await axios.delete(endpoint,id)
         return dispatch ({type: REMOVE_FAV, payload: data })     
      } catch (error) {
       console.log(error.message);
      }
    }
 }

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}
export const orderCards = (orden) => {
    return {type: ORDER , payload: orden}
}
