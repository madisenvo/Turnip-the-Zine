import React from "react";
import "./thoughts.css";

export default function Thoughts() {
  return (
    <div className="container">
      <div className="be-comment-block">
        <div className="be-comment">
          <div className="be-comment-content">
            <span className="be-comment-name">
              <h4>USER.FISTNAME</h4>
            </span>
            <span className="be-comment-time">
              <i className="fa fa-clock-o"></i>
              DATE/TIME
            </span>

            <p className="be-comment-text">
              Pellentesque gravida tristique ultrices. Sed blandit varius
              mauris, vel volutpat urna hendrerit id. Curabitur rutrum dolor
              gravida turpis tristique efficitur.
            </p>
          </div>
        </div>
        <div className="be-comment">
          <div className="be-img-comment">
            <a href="blog-detail-2.html"></a>
          </div>
        </div>
        <div>
          <form className="form-block">
            <div className="col-xs-12">
              <div className="form-group">
                <textarea
                  className="form-input"
                  required=""
                  placeholder="Your text"
                ></textarea>
              </div>
            </div>
            <a className="btn btn-primary pull-right">submit</a>
          </form>
        </div>
      </div>
    </div>
  );
}
