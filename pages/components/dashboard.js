import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    let [DashboardData, getData] = useState([])
    const getDashboardData = async () => {
        const { data } = await axios.get("https://103.12.1.103/AbsiQuotingAPI/Master/GetProposalMaster")
        getData(data);
    }

    useEffect(() => {
        getDashboardData();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="row mt-3">
                    <div className="col-lg-3">
                        <h2 className="fw-bold">Dashboard</h2>
                        <p className="text-primary">Welcome back, Shashank Reddy M</p>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-1">
                        <img className="img-fluid" src="https://103.12.1.103/AbsiQuotingFE/assets/icons/Notification.svg" />
                    </div>
                    <div className="col-lg-1">
                        <img className="img-fluid" src="https://103.12.1.103/AbsiQuotingFE/assets/icons/logout.svg" />
                    </div>
                </div>

                <div className="row m-2 p-4 shadow-lg rounded-4">
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
                        <select className="form-select form-select-sm">
                            <option value="">By Clients</option>
                            <option value="first">first</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <select className="form-select form-select-sm">
                            <option value="">By Proposal Type</option>
                            <option value="first">first</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <select className="form-select form-select-sm">
                            <option value="">By Status</option>
                            <option value="first">first</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <button className="btn btn-light btn-sm text-primary border-primary">Clear filters</button>
                    </div>
                </div>

                <table className="table table-hover mt-4 ">
                    <thead className="table-info text-secondary ">
                        <tr>
                            <th>Proposal ID</th>
                            <th>Proposal Type</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Generator</th>
                            <th>Manager</th>
                            <th>Status</th>
                            <th>Proposal</th>
                            <th>Actions/Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DashboardData.map((info) => {
                                return (
                                    <tr key={info.id}>
                                        <td>{info.proposalID}</td>
                                        <td>{info.proposalType}</td>
                                        <td>{info.clientName}</td>
                                        <td>{info.date}</td>
                                        <td>{info.generator}</td>
                                        <td>{info.manager}</td>
                                        <td>{info.status}</td>
                                        <td>
                                            {

                                                info.statusID > 2 && (
                                                    <a href={info.proposalURL}>
                                                        <img src="https://103.12.1.103/AbsiQuotingFE/assets/images/word.png" style={{ width: "50px" }} />
                                                    </a>
                                                )

                                            }
                                        </td>
                                        <td>
                                        <b>{info.comments}</b>
                                            {
                                                info.statusID != 4 && info.statusID != 5 && (
                                                    <button className="btn btn-primary btn-sm" >Work/Edit</button>
                                                )
                                            }

                                            {
                                                info.statusID == 3 && (
                                                    <button className="btn btn-success">Send for Approval</button>
                                                )
                                            }
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Dashboard;