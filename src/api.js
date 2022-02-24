import { API_URL } from "./config"

const getListCategories=async()=>{
    const response=await fetch(API_URL + 'categories.php')
    return response.json()
}

const getFullDetails=async(id)=>{
    const response= await fetch(API_URL + 'lookup.php?i=' + id)
    return response.json()
}
const getFilterCategoria=async(typeName)=>{
    const response= await fetch(API_URL + 'filter.php?c=' + typeName)
    return response.json()
}

export {getFilterCategoria,getFullDetails,getListCategories}