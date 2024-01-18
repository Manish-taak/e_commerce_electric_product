import React, { useState } from 'react'
// import logo from '../img/Logo-main-header.svg'
// import logout from '../img/logoutUser.svg'
import eyes from '../img/blueEyes.svg'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import * as yup from "yup"

const schema = yup.object({
  email: yup.string("enter your email dont mistake @ gmail . ").email().required("please put the email .."),
  password: yup.string("enter your.....").required("enter your password")
})


// const schema = yup
//   .object({
//     email: yup.string().required(),
//     password: yup.number().positive().integer().required(),
//   })

export const Login = () => {
  const [password, setPassword] = useState(false);
  const showHide = () => {
    setPassword((per) => !per)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="login createaccount ">
          <p className='common-20-1' >Log in to buynow</p>
          <input
            {...register("email")}
            className='simple-inpuit common-16-2 '
            type="text"
            placeholder='Email/Phone no.'
            name='email'
          />
          <p>{errors.email?.message} </p>
          <div className="optional">
            <input
              className='optional-inpuit common-16-2'
              type={password ? "text" : "password"}
              placeholder='password'
              {...register("password")}
            />
            <img onClick={() => { showHide() }} src={eyes} alt="location" />
          </div>
          <p>{errors.password?.message}</p>
          <label className='ckeckbox-user' htmlFor="">
            <div className="check">
              <input
                className='check-box-returns'
                type="checkbox"
              />
              <p className='common-16-2' >By continuing, you agree to <span className='common-16-5' >Buynow</span>  policy</p>
            </div>
            <Link>Forgot?</Link>
          </label>
          <button style={{ width: "97px" }} className='btn-common-main' type='submit' >Log In</button>
        </div>
      </form>
    </>
  )
}
