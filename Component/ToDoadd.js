import React from 'react'

const ToDoadd = () => {
  return (
    
       <div className="container ">
          <div className="row kg-row">
            <div className="col-6">
              <input type="text" placeholder="Enter your task" />
            </div>
            <div className="col-4">
              <input type="date" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-warning">ADD</button>
            </div>
          </div>

    </div>
  )
}

export default ToDoadd
