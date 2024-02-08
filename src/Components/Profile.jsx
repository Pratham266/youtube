import React from 'react'

const Profile = ({data,handlePremium}) => {
    
    const { firstname, lastname, email, gender, mobile, age, isPremium } = data 
  return (
    <div>
            <table className="table table-hover">
              <tbody>
                <tr className="table-primary">
                  <th scope="row">Name</th>
                  <td>{firstname} {lastname}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{email}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile</th>
                  <td>{mobile}</td>
                </tr>
                <tr>
                  <th scope="row">Gender</th>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <th scope="row">Age</th>
                  <td>{age}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{isPremium ? "Premium" : 'Normal'}</td>
                </tr>
              </tbody>
            </table>
            <div
                className="p-2 flex-fill bd-highlight"  >
                <button
                  className={`btn btn-warning ${isPremium ? "" : ""}`}
                  onClick={handlePremium}
                >
                  {!isPremium ? "Upgrade to Premium" : "Downgrade to Normal"}
                </button>
              </div>
            </div>
  )
}

export default Profile
