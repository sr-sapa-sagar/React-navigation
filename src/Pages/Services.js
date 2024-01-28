import React, { useState } from 'react'
import Form from './Form'


export default function Services() {

  const [form,setForm] = useState('')

  const handleClick = ()=>{
  setForm(<Form/>)
  }
  return (
    <div>
        <div className='container'>
            <h1 className='display-4 fw-bold'>Services</h1>
            <p className='h3 fw-ligth'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
            <p className='h3 fw-ligth'>
              <button onClick={handleClick}>Send</button>
              <div>
                {form}
              </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
            <p className='h3 fw-ligth'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
            <p className='h3 fw-ligth'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
            <p className='h3 fw-ligth'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
            <p className='h3 fw-ligth'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
            <p className='h3 fw-ligth'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic
            </p>
            <br/>
        </div>
    </div>
  )
}
