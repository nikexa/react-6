import React, { useState } from 'react'
import '../SubmitBtn/SubmitBtn.css'

const SubmitBtn = ({count, show}) => {

    const [submit, setSubmit] = useState(false)

    function handleSubmit() {
        if(count !== 0){
            setSubmit(true)
            show(false)
        }
    }

  return (
    <>
        <button onClick={handleSubmit} className='SubmitBtn'>Submit</button>
    </>
  )
}

export default SubmitBtn