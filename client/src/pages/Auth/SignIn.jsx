import React, { useState } from 'react'
import LoginImg from '../../assets/VideoIMGLogin.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SignIn = () => {
    const [SignInData, SetSignData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetSignData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const headleSubmit = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/Auth/SignUp', SignInData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert()
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
                            <h1 className="text-xl font-semibold text-center pt-8">SignIn Here</h1>

                            <div className="my-4 mx-4">
                                <form  method="post">
                                    <div className="">
                                        <p className="text-[#AD63FF] text-xl pb-2">Email : </p>
                                        <input type="email" name="email" value={SignInData.email} onChange={handleChange} id="" className="w-full h-12 rounded bg-[#161d30] pl-2 mr-2" required placeholder='Email Address'/>
                                    </div>

                                    <div className="my-4">
                                        <p className="text-[#AD63FF] text-xl pb-2">Password : </p>
                                        <input type="password" name="password" value={SignInData.password} onChange={handleChange} id="" className="w-full h-12 rounded bg-[#161d30] pl-2 mr-2" required placeholder='Password'/>
                                    </div>

                                    <div className="my-6">
                                        <button type="submit" className='bg-[#AD63FF] py-2 px-4 rounded w-full'>SignIn</button>
                                    </div>
                                </form>

                                <Link>
                                    <p className="text-[#AD63FF]">Forget Password ? </p>
                                </Link>
                                <p className="">Don't have an Account ? <Link to={'/SignUp'}><span className='text-[#AD63FF]'>Create New</span></Link></p>

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

export default SignIn