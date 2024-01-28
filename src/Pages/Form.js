import React from 'react'

export default function Form() {
  return (
    <div>
        <div className='w-25'>
        <form className=''>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='Enter Name'></input>
            </div>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='Enter UserName'></input>
            </div>
            <button className='btn btn-primary btn-sm'>Send</button>
        </form>
        </div>
    </div>
  )
}
