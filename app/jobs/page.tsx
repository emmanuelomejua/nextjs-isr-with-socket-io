"use client";


import React, { ChangeEvent, useState } from 'react'

const Jobs = () => {

    const [jobDetails, setJobDetails] = useState({
        jobTitle: '',
        zipCode: 0,
        description: '',
        cost: '',
        clientName: ''
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setJobDetails({...jobDetails, [name]: value})
    }


    const handleSubmit = () => {

        const data = JSON.stringify({jobDetails})
        JSON.stringify(localStorage.setItem('jobData', data))
        alert('Successful!!');

        console.log(data);
    }


  return (
    <div className='flex mx-auto p-4 flex-col '>

        <form action="" className="flex flex-col gap-4 w-[500px] p-4 bg-[#555] rounded-[10px" onSubmit={handleSubmit}>
            <h1>Job Scenirio Assessment</h1>
            <input type="text" onChange={handleChange} name='clientName' className="p-4 " placeholder='Client Name' />

            <input type="text" onChange={handleChange} name='jobTitle' className="p-4 " placeholder='Job Title' />

            <input type="number" onChange={handleChange} name='zipCode' className="p-4 " placeholder='ZIP Code' />

            <input type="text" onChange={handleChange} name='description' className="p-4 " placeholder='Description' />

            <input type="number" onChange={handleChange} name='cost' className="p-4 " placeholder='Estimated Cost' />

            <button className='cursor-pointer p-4 rounded-2xl bg-[#222]' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Jobs;


