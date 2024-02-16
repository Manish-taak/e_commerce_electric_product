import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000"
})


//============================================================================//
// regster contoller
//============================================================================//

export const register = async (data) => new Promise((resolve, reject) => {
    API.post('/user', data).then(res => resolve(res)).catch(err => reject(err))
})

//============================================================================//
// login contoller
//============================================================================//

export const login = async (data) => new Promise((resolve, reject) => {
    API.post('/user/login', data).then(res => resolve(res)).catch(err => reject(err))
})

// ===========================================================================//
// getdata all data 
// ===========================================================================//

export const getdata = async () => new Promise((resolve, reject) => {
    API.get('api/product').then(res => resolve(res)).catch(err => reject(err))
})

// ===========================================================================//
// get name category data
// ===========================================================================//

export const getcategorydata = async () => new Promise((resolve, reject) => {
    API.get('api/getcategory').then(res => resolve(res)).catch(err => reject(err))
})

// ===========================================================================//
// get color code  data
// ===========================================================================//
export const getcolor = async () => new Promise((resolve, reject) => {
    API.get('api/getcolr').then(res => resolve(res)).catch(err => reject(err))
})
// ===========================================================================//
// get brands code  data
// ===========================================================================//

export const getbrands = async () => new Promise((resolve, reject) => {
    API.get("/api/findManybrand").then(res => resolve(res)).catch(err => reject(err))
})

// ===========================================================================//
// get brands code  data
// ===========================================================================//

export const singleproductdata = async (id) => new Promise((resolve, reject) => {
    API.get(`/api/product/${id}`).then(res => resolve(res)).catch(err => reject(err))
})


export const subcategorydata = async (link) => new Promise((resolve, reject) => {
    API.get(`/api/subcategory/${link}`).then((res) => resolve(res)).catch((err) => reject(err))
})
/*
http://localhost:8000/api/subcategory/2                 subcategory se get data
http://localhost:8000/api/brandsget/1                   brands se get data 
http://localhost:8000/api/product/2                     single products data 
http://localhost:8000/api/product                       all products get  
http://localhost:8000/api/category                      all products get  
http://localhost:8000/api/getcategory                   get category name 

*/
