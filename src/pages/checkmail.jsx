import React from 'react'

function Checkmail() {
  return (
    <div className='w-full h-screen bg-login-bg bg-cover flex flex-col justify-center items-center'>
      <div className='flex w-3/4 justify-center h-[300px] '>
      <dotlottie-player src="https://lottie.host/fc6df4e1-5e83-4ab5-8304-67d106d8a04f/xI2k8hNdyb.json" background="##FFFFFF" speed="1" loop  autoplay direction="1" mode="normal"></dotlottie-player>
      </div>
      <div className='flex w-3/4 text-sm text-center text-gray-600'>
        <h1>Kindly check Your registered mail. Please click on the link attached to proceed with the next process  </h1>
        </div>
    </div>
  )
}

export default Checkmail
