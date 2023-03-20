import React, { useState, useEffect } from 'react'
import axios from 'axios';



const supportRole = () => {
    const [Support, setSupport] = useState([]);

    const getSupport = async () => {
        const { data } = await axios.get("https://103.12.1.103/AbsiQuotingAPI/Master/GetSupportRoleMaster")
        setSupport(data)
    }



    useState(() => {
        getSupport()
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="row mt-3">
                    <div className="col-lg-5">
                        <h2 className="fw-bold">Support Role Dashboard</h2>
                        <p className="text-primary">Welcome back, Shashank Reddy M</p>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-1">
                        <img className="img-fluid" src="https://103.12.1.103/AbsiQuotingFE/assets/icons/Notification.svg" />
                    </div>
                    <div className="col-lg-1">
                        <img className="img-fluid" src="https://103.12.1.103/AbsiQuotingFE/assets/icons/logout.svg" />
                    </div>
                </div>

                <div className="row m-2 p-4 shadow-lg rounded-3">
                    <div className="col-lg-1 text-end ">
                        <img className="img-fluid" src="https://103.12.1.103/AbsiQuotingFE/assets/images/filter_icon.svg" />
                    </div>
                    <div className="col-lg-1 text-primary">
                        <h6 className="mt-1">Filter by :</h6>
                    </div>
                    <div className="col-lg-2">
                        <input className="form-control form-control-sm" type="text" placeholder="Search..." />
                    </div>
                    <div className="col-lg-2">
                        <button className="btn btn-primary btn-sm">Create Support Role </button>
                    </div>
                </div>
            </div>

            <table className='table table table-hover mt-4 shadow-lg rounded-4'>
                <thead className="table-info text-secondary">
                    <tr>
                        <th>Support Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Support.map((info) => {
                            return (
                                <tr key={info.id}>
                                    <td>{info.supportRole}</td>
                                    <td>
                                        <button className="btn btn-light btn-sm text-primary border-primary">Edit</button>
                                        <button className="btn btn-light btn-sm text-primary border-primary">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default supportRole