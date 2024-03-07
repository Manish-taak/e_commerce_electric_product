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

// ===========================================================================//
// subcategorydata
// ===========================================================================//
export const subcategorydata = async (link) => new Promise((resolve, reject) => {
    API.get(`/api/subcategory/${link}`).then((res) => resolve(res)).catch((err) => reject(err))
})

// ===========================================================================//
// cartpostdata
// ===========================================================================//
// export const cartpostdata = async (data, token) => new Promise((resolve, reject) => {
//     API.post(`/api/createcart`, {
//         'headers': {
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFuaXNoIiwiZW1haWwiOiJtYW5pc2hAZ21haWwuY29tIiwicGFzc3dvcmQiOiIwMDAxMTAwMCIsInBob25lbnVtYmVyIjoiIiwiaWF0IjoxNzA5MDA5NjAzLCJleHAiOjE3NDA1NDU2MDN9.rWePihkx2Ry-l-pjX89oBsCJS42GB-3J0cNMZOT8R2A',
//             'Content-Type': 'application/json'
//         },
//     }, data).then((res) => resolve(res)).catch((err) => reject(err))
// })
export const cartpostdata = async (data, token) => new Promise((resolve, reject) => {
    console.log(token, "=================================api token page ")
    API.post(`/api/createcart`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    }).then((res) => resolve(res)).catch((err) => reject(err))
})
// ===========================================================================//
// cart get item 
// ===========================================================================//
export const cartugertitem = async () => new Promise((resolve, reject) => {
    API.get("/api/userdetails/1").then((res) => resolve(res)).catch((err) => reject(err))
})

// ===========================================================================//
// mulitipals cart item 
// ===========================================================================//

export const mulitipalscartitem = async () => new Promise((resolve, reject) => {
    API.get("/api/findManydata").then((res) => resolve(res)).catch((err) => reject(err))
})


// ===========================================================================//
// cart quantity update route ================================================//
// ===========================================================================//

export const cartquantityupdate = async (id, data) => new Promise((resolve, reject) => {
    API.put(`/api/updatequantity/${id}`, data).then((res) => resolve(res)).catch((err) => reject(err))
})

// ===========================================================================//
// delete cart item ================================================//
// ===========================================================================//

export const deletecartitem = async (id) => new Promise((resolve, reject) => {
    API.delete(`/api/deletecart/${id}`).then((res) => resolve(res)).catch((err) => reject(err))
})

