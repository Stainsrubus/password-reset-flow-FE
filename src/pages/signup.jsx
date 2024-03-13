import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AxiosService from "../utils/ApiService";
import {toast} from 'react-toastify'

function Signup() {
  let [name,setName] = useState("")
  let [mobile,setMobile] = useState("")
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); 
    if (!email || !password) {
      toast.error('Please fill all the fields');
      return;
    }
    try {
      let res = await AxiosService.post(`/user/signup`,{
        name,
        mobile,
        email,
        password,
      })
      if(res.status===201)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
        navigate('/')
      }
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <>
      <div className=" w-screen absolute h-screen bg-login-bg bg-cover blur-md"></div>
      <div className="flex flex-col h-screen justify-center items-center relative">
        <div className="sm:w-3/4 lg:w-1/2 absolute">
          <div className="  gap-5  h-auto mt-10 border border-blue-200 outline-dashed outline-blue-200 rounded-lg shadow-lg shadow-blue-300 text-white flex">
            <div className="flex flex-col gap-5 items-center w-1/2 justify-center">
              <dotlottie-player
                src="https://lottie.host/5a22d991-707b-43e6-90d3-debbfd9978ea/RZOoarVCG4.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>{" "}
            </div>
            <div className="flex flex-col gap-10 w-1/2">
              <h1 className="text-center text-blue-500   text-2xl font-pacifico  pt-10">
                Register Here!
              </h1>
              <Form
                className="flex flex-col gap-5 items-center"
                onSubmit={handleSignup}
              >
                <Form.Group className="mb-3 w-full flex justify-center">
                  <Form.Control
                    className="shadow-lg text-black text-bold px-3 outline-none rounded-md h-8  shadow-blue-400 w-3/4"
                    type="text"
                    placeholder="Enter Name "
                    onChange={(e) => setName(e.target.value)}

                  />
                </Form.Group>
                <Form.Group className="mb-3 w-full flex justify-center">
                  <Form.Control
                    className="shadow-lg text-black text-bold px-3 outline-none rounded-md h-8  shadow-blue-400 w-3/4 "
                    type="text"
                    placeholder="Ex: 92xxxxxx89"
                    onChange={(e) => setMobile(e.target.value)}

                  />
                </Form.Group>
                <Form.Group className=" mb-3 w-full flex justify-center">
                  <Form.Control
                    className="shadow-lg text-black text-bold px-3 outline-none rounded-md h-8  shadow-blue-400 w-3/4 "
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-full flex justify-center  ">
                  <Form.Control
                    className="w-3/4 outline-none text-black text-bold px-3 shadow-lg rounded-md h-8 shadow-blue-400"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="bg-blue-500 w-20 py-1 rounded-lg border border-blue-200 shadow-md shadow-blue-300 text-md font-bold "
                  type="submit"
                
                >
                  Sign Up
                </Button>

                <div className="flex pt-5 pb-5 text-blue-500 ">
                  <p className="text-center">Already have an account? </p>
                  <Link to="/login" className="font-black ">
                    {" "}
                    ꧁ SignIn ꧂{" "}
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
