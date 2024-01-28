import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const { username } = useParams()
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col md-4'>
                     <div className='card'>
                    <div className="card-body">
                   <h5 className="card-title">{username}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make content.</p>
                      <a href="#" class="card-link">Card link</a>
                     <a href="#" class="card-link">Another link</a>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
