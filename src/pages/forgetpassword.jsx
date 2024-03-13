import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
function Forgetpassword() {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      toast.error('Please fill all the fields');
      return;
    }else{
    try {
      let res = await AxiosService.post(`/user/forget-password`,{
        email,
      },
      navigate("/checkmail"))
    } catch (error) {
     console.log('error')
    }}
  };
  return (
    <>
      <div className=" w-screen absolute h-screen bg-login-bg bg-cover blur-md"></div>
      <div className="flex flex-col h-screen justify-center items-center relative">
        <div className="w-1/2 absolute">
          <div className="  gap-5  h-auto mt-10 border justify-center border-blue-200 outline-dashed outline-blue-200 rounded-lg shadow-lg shadow-blue-300 text-white flex">
            <div className="flex flex-col gap-10 w-3/4">
              <h1 className="text-center text-blue-500   text-2xl font-pacifico  pt-10">
                Forget Password!
              </h1>
              <Form
                className="flex flex-col gap-5 items-center"
                onSubmit={handleSubmit}
              >
                <Form.Group className=" mb-3 w-full flex justify-center">
                  <Form.Control
                    className="shadow-lg text-black text-bold px-3 outline-none rounded-md h-8  shadow-blue-400 w-3/4 "
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                

                <Button
                  variant="primary"
                  className="bg-blue-500 w-20 py-1 rounded-lg border border-blue-200 shadow-md shadow-blue-300 text-md font-bold "
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
              <Link to="/login" className=" pb-10  ">
                  <p className="text-blue-400  text-center text-sm ">
                  ⬅ Back to Login
                  </p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgetpassword;
