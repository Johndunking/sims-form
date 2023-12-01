import React from 'react'
import CICO from '../assets/CICO.jpg'

const Cico = () => {
  return (
    <div className="card" style={{width: '48rem'}}>
  <img src={CICO} className="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Check In Check Out</h5>
    <p class="card-text">Here is an example of Check In Check out for guidance in your own use.</p>
    <div className="d-flex justify-content-center">
  <a href="https://docs.google.com/document/d/12ai70il0f23Er3DWSM4JKbdVRMQkEDsql8Z5vAF6IBw/edit?usp=sharing" className="btn btn-primary">
    CICO
  </a>
</div>

  </div>
</div>
  )
}

export default Cico