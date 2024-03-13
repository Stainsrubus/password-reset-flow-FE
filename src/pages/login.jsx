import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AxiosService from '../utils/ApiService'
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error('Please fill all the fields');
      return;
    }
    try {
      let res = await AxiosService.post(`/user/login`,{
        email,
        password
      })

      if(res.status===200)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
        navigate('/home')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <>
      <div className=" w-screen absolute h-screen bg-login-bg bg-cover blur-md"></div>
      <div className="flex flex-col h-screen justify-center items-center relative">
        <div className="sm:w-3/4 lg:w-1/2 absolute">
          <div className="  gap-5  h-[400px] mt-10 border border-blue-200 outline-dashed outline-blue-200 rounded-lg shadow-lg shadow-blue-300 text-white flex">
            <div className="flex flex-col gap-5 items-center w-1/2 justify-center">
              <dotlottie-player
                src="https://lottie.host/0abfd9cc-208b-4165-adce-53b9c9d0800e/8vlyAAHtbK.json"
                background="##fff"
                speed="0.5"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></dotlottie-player>
            </div>
            <div className="flex flex-col gap-10 w-1/2">
              <h1 className="text-center text-blue-500   text-2xl font-pacifico  pt-10">
                Login Here!
              </h1>
              <Form
                className="flex flex-col gap-5 items-center"
                onSubmit={handleLogin}
              >
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

                <Link to="/forgetpassword" className="  w-3/4">
                  <p className="text-blue-400 text-right text-xs underline">
                    Forget Password?
                  </p>
                </Link>

                <Button
                  variant="primary"
                  className="bg-blue-500 w-20 py-1 rounded-lg border border-blue-200 shadow-md shadow-blue-300 text-md font-bold "
                  type="submit"
                >
                  Login In
                </Button>

                <div className="flex pt-5 text-blue-500 ">
                  <p className="text-center">Dont have an account? </p>
                  <Link to="/sign-up" className="font-black ">
                    {" "}
                    ꧁ SignUp ꧂{" "}
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

export default Login;
