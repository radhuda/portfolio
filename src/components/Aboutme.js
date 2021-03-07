import React from "react"
import Mypic from "../me.jpg"

const Aboutme = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className ="photo-wrap mb-5">
                        <img className="profile-img" src={Mypic} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12 aboutme">
                    <h1>About Me</h1>
                    <p> My name is Rad Huda, I have been a pharmacist for ten years. </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
