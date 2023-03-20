import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReactPaginate from "react-paginate";

function hdmf() {

    const [hdmf, setHDMF] = useState([]);

    const getHDMF = async () => {
        const { data } = await axios.get("https://103.12.1.103/AbsiQuotingAPI/Master/GetHDMFMaster")
        setHDMF(data)
    }
    const PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(hdmf.length / PER_PAGE);
    useEffect(() => {
        getHDMF()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="row mt-3">
                    <div className="col-lg-5">
                        <h2 className="fw-bold">HDMF Dashboard</h2>
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
                        <button className="btn btn-primary btn-sm">Create HDMF </button>
                    </div>
                </div>
            </div>

            <table className='table table-hover mt-4 shadow-lg rounded-4'>
                <thead className="table-info text-secondary">
                    <tr>
                        <th>Salary From</th>
                        <th>Salary To</th>
                        <th>Employers Contribution</th>
                        <th>Employees Contribution</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hdmf.slice(offset, offset + PER_PAGE).map((info) => {
                            return (
                                <tr key={info.id}>
                                    <td>{info.salaryFrom}</td>
                                    <td>{info.salaryTo}</td>
                                    <td>{info.employerContribution}</td>
                                    <td>{info.employeeContribution}</td>
                                    <td>{info.total}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination  justify-content-center"}
                pageClassName={"page-item "}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active primary"}
            />
        </div>
    )
}

export default hdmf