import "../style/Project.css"
import React from 'react'
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
    <div className="bg_p">
    <div className="Projects">
      <h1 className="Project">Project</h1>
      <div className="images">
        <Link to={'/Detail'}>
        <div className="img_a"></div>
        <div className="img_b"></div>
        <div className="img_c"></div>
        <div className="img_d"></div>
        <div className="img_e"></div>
        <div className="img_f"></div>
        <div className="img_g"></div>
        </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Project;