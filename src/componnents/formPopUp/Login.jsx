import React from 'react'
import './login.css'


function Login({setshowForm ,showForm}) {

    return (
        <div className='pop-up'>
            <div className='form-box'>
                <form action="" className='sign-in'>
                    <div className='sign-in-title'>
                        <h2>{showForm}</h2>
                        <span className='icon-x' onClick={() => {
                          setshowForm("");
                        }
                        }></span>
                    </div>
                    {
                        showForm ==="sign up"&&(
                            <input className='input-text' type="text" placeholder='Your Name' required/>
                        )
                    }
                    
                    <input className='input-text' type="text" placeholder='Your email' required/>
                    <input className='input-text' type="text" placeholder='Your password' required/>
                    <button>{showForm}</button>

                </form>
                <div className="sign-in-footer">
                    <div>
                        <input className='checkbox' type="checkbox"  required/>
                        <label >By Countinuing i agree to the terms of use & privacy policy </label>
                    </div>
                    <p>{showForm==="login"?"Don't have an account ? ":"you have an account ? "}<a href="#" onClick={() => {
                      if(showForm==="sign up"){
                        setshowForm("login")
                      }else{
                        setshowForm("sign up")
                      }
                    }
                    }>{showForm==="sign up"?"Login here":"sign up here"}</a></p>
                </div>
            </div>

        </div>
    )
}

export default Login
