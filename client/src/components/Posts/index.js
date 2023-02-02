import { getOperationAST } from "graphql";
import React, { useEffect } from "react";
import { idbPromise } from "../../utils/helpers";
import "./thoughts.css";

export default function Thoughts() {
//   useEffect(() => {   
//     console.log("hi") 
//     async function getPosts() {
//       console.log('before')
//       const post = await idbPromise("posts", "get");
//       console.log('after')
//     }  
//   getPosts()

//   }, []);

  return (
    <div className="commentContainer">
      <div className="commentDiv">
        <div>
          <div>
            <span>
              <h4>username</h4>
            </span>
            <span className="commentTime">
              10/10/10
            </span>

            <p className="commentText">
                hi
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
