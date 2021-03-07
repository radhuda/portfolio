import React from 'react'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Design</h3>
                                <p>I approach each projects individually</p>
                            </div>                            
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Cloud Apps</h3>
                                <p>Certified as a solution architect for amazon</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Data Engineering Apps</h3>
                                <p>Have been building data intensive apps for more than 6 companies</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Blockchain Developer</h3>
                                <p>Building projects on cosmos network</p>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
