import React from 'react'

const ToDodel = () => {
    let todoName = 'Buy Books';
    let todoDate = '2022-01-01'
  return (
    <div>
        <div className="container">
      <div className="row kg-row">
            <div className="col-6">
              {todoName}
            </div>
            <div className="col-4">
              {todoDate}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
    </div>
    </div>
  )
}

export default ToDodel
