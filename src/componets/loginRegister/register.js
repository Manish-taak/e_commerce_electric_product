import React, { useState } from 'react'
import eyes from '../img/blueEyes.svg'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as api from '../axios/apis';

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

// validation schema ==================================================================================
const schema = yup.object({
  name: yup.string().required(),
  email_or_phone: yup.string()
    .required('Email / Phone is required')
    .test('email_or_phone', 'Email / Phone is invalid', (value) => {
      return validateEmail(value) || validatePhone(value);
    }),
  password: yup.string().required('Password is required'),
  comfirmpassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

// Register funcation start ============================================================================
const Register = () => {
  // password input show hide  ========================text-dote========================================
  const [password, setPassword] = useState(false);
  const showHide = () => {
    setPassword((per) => !per)
  }

  // yup validaiton methode ============================================================================
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // yup validation onSubmit ===========================================================================
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
    delete data['comfirmpassword'];
    // on click per api heat transfer ==================================================================
    let res = await api.register(data).then(res => {
      // console.log(res.data.message, ' --- success')
      window.alert(res.data.message)
    }).catch(error => {
      console.log(error.data, ' --- error')
      window.alert(error.response.data.message)
    })
  }
  return (
    // ==============================================================================start register htnl S
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
      >
        <div className="createaccount">
          <p className='common-20-1' >Create Your Account</p>
          <input
            {...register("name")}
            className='simple-inpuit common-16-2'
            type="text"
            placeholder='Your name'
            name='name'
            autoComplete='off'
          />
          {
            errors.name ? (<>
              <p className='error-handle'>
                {errors.name?.message}
              </p>
            </>) : (<></>)
          }
          <input
            {...register("email_or_phone")}
            className='simple-inpuit common-16-2 '
            type="text"
            placeholder='Email/Phone no.'
            name='email_or_phone'
            autoComplete='off'

          />
          {
            errors.email_or_phone ? (<>
              <p className='error-handle' >
                {errors.email_or_phone?.message}
              </p>
            </>) : (<></>)
          }
          <input
            {...register("password")}
            className='simple-inpuit common-16-2'
            type="text"
            placeholder='password'
            name='password'
            autoComplete='off'
          />
          {
            errors.password ? (<>
              <p className='error-handle' >
                {errors.password?.message}
              </p>
            </>) : (<></>)
          }
          <div className="optional">
            <input
              {...register("comfirmpassword")}
              className='optional-inpuit common-16-2'
              type={password ? "text" : "password"}
              placeholder='Confirm password'
              name='comfirmpassword'
            />
            <img onClick={showHide} src={eyes} alt="location" />
          </div>
          {
            errors.comfirmpassword ? (<>
              <p className='error-handle' >
                {errors.comfirmpassword?.message}
              </p>
            </>) : (<></>)
          }
          <label className='ckeckbox-user'>
            <div className="check">
              <input className='check-box-returns' type="checkbox" name="" id="" />
              <p className='common-16-2' >By continuing, you agree to <span className='common-16-5' >Buynow</span>  policy</p>
            </div>
          </label>
          <button type='submit' className='account-btn btn-common-main' >Create account</button>
        </div>
      </form>
    </>
  )
}


export default Register