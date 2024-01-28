import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page() {
    const {page} = useParams()
    if (page=="our-mission"){
    
  return (<div>
        <h1>Our-mission</h1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book
             It has survived not only five centuries, but also the leap into electronic</p>
    </div>)
    }
    return(
      <div>
        <h1>{page}</h1>
      </div>
    )
}
