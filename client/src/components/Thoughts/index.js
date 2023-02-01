import React from "react";
import "./thoughts.css";

export default function Thoughts() {
  return (
    <div className="commentContainer">
      <div className="commentDiv">
        <div>
          <div>
            <span>
              <h4>USERNAME</h4>
            </span>
            <span className="commentTime">
              DATE/TIME
            </span>

            <p className="commentText">
              Pellentesque gravida tristique ultrices. Sed blandit varius
              mauris, vel volutpat urna hendrerit id. Curabitur rutrum dolor
              gravida turpis tristique efficitur.
            </p>
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
            <a className="btn pull-right">submit</a>
          </form>
        </div>
      </div>
    </div>
  );
}
