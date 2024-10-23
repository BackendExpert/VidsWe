import React, { useState } from 'react'
import LoginImg from '../../assets/VideoIMGLogin.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const SignUp = () => {
    const navigate = useNavigate()
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetSignUpData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const headleSignUp = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/Auth/SignUp', SignUpData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Registation Successfull")
                    navigate('/SignIn')
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div className='bg-[#161d30] min-h-screen text-white pt-28'>
        <div className="">
            <div className="md:flex md:mt-20 mt-8 md:mx-0 mx-4">
                <div className="w-1/4"></div>
                <div className="w-full bg-[#292f45] p-4 rounded shadow-md">
                    <div className="md:flex">
                        <div className="w-full">
                            <h1 className="text-xl font-semibold text-center pt-8">Create Account</h1>

                            <div className="my-4 mx-4">
                                <form onSubmit={headleSignUp} method="post">
                                    <div className="">
                                        <p className="text-[#AD63FF] text-xl pb-2">Username : </p>
                                        <input type="text" name="username" value={SignUpData.username} onChange={handleChange} id="" className="w-full h-12 rounded bg-[#161d30] pl-2 mr-2" required placeholder='Username'/>
                                    </div>

                                    <div className="my-4">
                                        <p className="text-[#AD63FF] text-xl pb-2">Email : </p>
                                        <input type="email" name="email" value={SignUpData.email} onChange={handleChange} id="" className="w-full h-12 rounded bg-[#161d30] pl-2 mr-2" required placeholder='Email Address'/>
                                    </div>

                                    
                                    <div className="my-4">
                                        <p className="text-[#AD63FF] text-xl pb-2">Password : </p>
                                        <input type="password" name="password" value={SignUpData.password} onChange={handleChange} id="" className="w-full h-12 rounded bg-[#161d30] pl-2 mr-2" required placeholder='Password'/>
                                    </div>

                                    <div className="my-6">
                                        <button type="submit" className='bg-[#AD63FF] py-2 px-4 rounded w-full'>Create Account</button>
                                    </div>
                                </form>

                                <p className="">Already have an Account ? <Link to={'/SignIn'}><span className='text-[#AD63FF]'>SignIn</span></Link></p>

                            </div>
                        </div>
                        <div className="w-full py-4 md:block hidden">
                            <img src={LoginImg} alt="" className='rounded-xl '/>
                        </div>
                    </div>
                </div>
                <div className="w-1/4"></div>
            </div>
        </div>
    </div>
  )
}

export default SignUp