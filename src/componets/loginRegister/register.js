import React, { useRef, useState } from 'react'
import eyes from '../img/blueEyes.svg'
import { Link } from 'react-router-dom'
const Register = () => {
  const [password, setPassword] = useState(false);
  const showHide = () => {
    setPassword((per) => !per)
  }
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    comfirmpassword: ""
  });
  const formRef = useRef()
  const [error, setError] = useState("")

  // // methode 1 
  // let name, value;
  // const onHandle = (e) => {
  //   name = e.target.name;
  //   value = e.target.value
  //   setUser({ ...user, [name]: value })
  // }

  // // methode is  long + old but working ...
  // const  submit = async (e) =>{
  //   e.preventDefault()
  //   const {name,email,password,comfirmpassword} = user;
  //   const post =  await fetch("http://localhost:3000/user/create",{
  //     method : "POST",
  //     headers : {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({
  //       name,email,password,comfirmpassword
  //     })
  //   })
  //   const data = await post.json();
  //   if(data.status === 404 || !data){
  //     window.alert("Invalid Registration")
  //     console.log("Invalid Registration")
  //   }else{
  //     window.alert("Registration succesfully ")
  //     console.log("successfully Registration")
  //   }
  // }





  // methode 2 
  const onHandle = (e) => {
    let { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  // second methode 
  const submit = async (e) => {
    e.preventDefault()
    if (user.name === "") {
      setError("Enter Your Name")
    }
    if (user.email === "") {
      setError("Enter Your Email")
    }
    if (user.password === "") {
      setError("Enter Your Password")
    }
    if (user.comfirmpassword === "") {
      setError("Enter Your confirm password")
    }
    const data = fetch("http://localhost:3000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        if (res.status === 200) {
          window.alert
            ("register successfully")
        }

      })
      .catch((error) => window.alert("somethig went worg"))
  }

  return (
    <>
      {error}
      <form
        onSubmit={(e) => submit(e)}
        action=""
        ref={formRef}
        method="post"
      >
        <div className="createaccount">
          <p className='common-20-1' >Create Your Account</p>
          <input
            className='simple-inpuit common-16-2 '
            type="text"
            placeholder='Your name'
            name='name'
            value={user.name}
            onChange={onHandle}
            autoComplete='off'
          />
          <input
            className='simple-inpuit common-16-2 '
            type="email"
            placeholder='Email/Phone no.'
            name='email'
            value={user.email}
            onChange={onHandle}
            autoComplete='off'
          />
          <input
            className='simple-inpuit common-16-2'
            type="text"
            placeholder='password'
            name='password'
            minLength={0}
            maxLength={8}
            value={user.password}
            onChange={onHandle}
            autoComplete='off'
          />
          <div className="optional">
            <input
              className='optional-inpuit common-16-2'
              type={password ? "text" : "password"}
              placeholder='Confirm password'
              name='comfirmpassword'
              value={user.comfirmpassword}
              onChange={onHandle}
              autoComplete='off'
              minLength={0}
              maxLength={8}
            />
            <img onClick={showHide} src={eyes} alt="location" />
          </div>
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