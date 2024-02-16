import React, { Fragment, useEffect, useState } from 'react'
import errorImg from '../img/error-page-not-found-vector.jpg'
// import axios from '../axios/productsAxios'
const Error = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const featchdata = async () => {
    //         try {
    //             let mydata = await axios.get("/posts")
    //             setData(mydata.data);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     featchdata();
    // })

    // if (loading) {
    //     return <p>lodding.....</p>
    // }
    // if (error) {
    //     return <p>error.message......</p>
    // }

    return (
        <>
            <div className="error_sec">
                <img src={errorImg} alt="error" />
                {/* {
                    data.map((item) => {
                        const { id, title, body } = item;
                        return (
                            <Fragment key={id}>
                                <p>{title.slice(0, 20).toUpperCase()}...</p>
                                <p>{body}...</p>
                            </Fragment>
                        )
                    })
                } */}
            </div>
        </>
    )
}

export default Error