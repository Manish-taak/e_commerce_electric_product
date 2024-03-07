import React, { useContext, useEffect, useState } from 'react';
import eyes from '../img/blueEyes.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as api from '../axios/apis';
import Usercontext from '../popupscontaxt/usercontext';


// validation email   ================================================================================
const validateEmail = (email) => {
  return yup.string().email().isValidSync(email)
};

// validatePhone  ====================================================================================
const validatePhone = (phone) => {
  return yup.number().integer().positive().test(
    (phone) => {
      return (phone && phone.toString().length >= 10 && phone.toString().length <= 14) ? true : false;
    }
  ).isValidSync(phone);
};

// validation schema ===================================------=================-=======================
const schema = yup.object({
  email_or_phone: yup.string()
    .required('Email / Phone is required')
    .test('email_or_phone', 'Email / Phone is invalid', (value) => {
      return validateEmail(value) || validatePhone(value);
    }),
  password: yup.string().required('Password is required'),
})


// start login function 
export const Login = () => {
  const [token1, settoken1] = useState()
  // const [usercheck, setusercheck] = useState(false)
  const { tokenuser, settokenuser } = useContext(Usercontext)
  console.log(tokenuser, "===================tokenuser")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    //  email methode emailRegex========================================================================
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(data.email_or_phone)) {
      data.email = data.email_or_phone;
      data.phonenumber = '';
    }
    else {
      data.email = '';
      data.phonenumber = data.email_or_phone;
    }
    // validation ke bad delete kiya gya ===============================================================
    delete data['email_or_phone'];
    //================================================================================================api 
    let res = await api.login(data).then((res) => {
      window.alert(res.data.message)
      sessionStorage.setItem("token", res.data.token)
    })
      .catch((error) => {
        window.alert(error.response.data.message)
      })
  }

  const [password, setPassword] = useState(false);
  const showHide = () => {
    setPassword((per) => !per);
  };

  // log out 
  // Remove saved data from sessionStorage
  function userlogout() {
    sessionStorage.removeItem("token");
    // setusercheck(false)
  }

  useEffect(() => {
    let gettoken = sessionStorage.getItem("token")
    settokenuser(gettoken)
  })


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="login createaccount ">
          <p className="common-20-1">Log in to buynow</p>
          <div>
            <input
              {...register('email_or_phone')}
              className="simple-inpuit common-16-2"
              type="text"
              placeholder="Email/Phone no."
              name="email_or_phone"
            />
            {
              errors.email_or_phone ? (
                <><p style={{ marginTop: "10px" }} className='error-handle'>
                  {errors.email_or_phone?.message}
                </p></>
              ) : (<></>)
            }
          </div>
          <div>
            <div className="optional">
              <input
                {...register('password')}
                className="optional-inpuit common-16-2"
                type={password ? 'text' : 'password'}
                placeholder="password"
              />
              <img onClick={() => showHide()} src={eyes} alt="location" />
            </div>
            {
              errors.password ? (
                <><p style={{ marginTop: "10px" }} className='error-handle'>
                  {errors.password?.message}
                </p></>
              ) : (<></>)
            }
          </div>
          <label className="ckeckbox-user" htmlFor="">
            <div className="check">
              <input className="check-box-returns" type="checkbox" />
              <p className="common-16-2">
                By continuing, you agree to <span className="common-16-5">Buynow</span> policy
              </p>
            </div>
            <Link>Forgot?</Link>
          </label>
          <button style={{ width: '97px' }} className="btn-common-main" type="submit">
            Log In
          </button>
        </div>
      </form>


      {/* log out btn */}
      <button onClick={() => userlogout()} style={{ width: '97px' }} className="btn-common-main">
        Log out
      </button>
    </>
  );
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjAwMDExMDAwIiwicGhvbmVudW1iZXIiOiIiLCJpYXQiOjE3MDkwMTA1MzMsImV4cCI6MTc0MDU0NjUzM30._oIm6AGijdVt82f9pqpFKv5HCTlTHR8mD_WG2aze31A
//  ======================token