import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './thoughts.css';

export default function Thoughts() {
    return (
<div className="container mt-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-6">
                <div className="bg-white comment-section">
                    <div className="d-flex flex-row user p-2">
                        <div className="d-flex flex-column ml-2"><span className="name font-weight-bold">Chris Hemsworth</span><span>10:30 PM, May 25</span></div>
                    </div>
                    <div className="mt-2 p-2">
                        <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="d-flex justify-content-between p-3 border-top"><span>Leave a comment</span>
                        <div className="d-flex align-items-center border-left px-3 comments"><i className="fa fa-comment"></i><span className="ml-2"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
