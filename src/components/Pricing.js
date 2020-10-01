import React from 'react'

function Pricing() {
    return (
        <div className="pricing-container">
        <div className="pricing">
            <h2>Select a Tvastra Plus healthcare plan</h2>
            <p>All Plus plans are for 4 adults and 2 children</p>
            <div className="plans-container">
                <div className="plans">
                    <div className="content">
                        <div className="header">
                            <hr className="top-hr" />
                            <h3>Basic Plan</h3>
                            <hr className="bottom-hr" />
                        </div>
                        <ul>
                            <li>Unlimited Consultation with any speciality</li>
                            <li>20% Off on prescription medicines</li>
                            <li>20% Off on tests & checkups</li>
                        </ul>
                    </div>
                    <div className="price">
                        <div>
                            2999<span>/year</span>
                        </div>
                        <a href="">View Plan Details</a>
                        <button>Buy Plan</button>
                    </div>
                </div>
                <div className="plans popular-plan">
                    <div className="popular-block">
                        Popular
                    </div>
                    <div className="content">
                        <div className="header">
                            <hr className="top-hr" />
                            <h3>Advanced Plan</h3>
                            <hr className="bottom-hr" />
                        </div>
                        <ul>
                            <li>Unlimited Consultation with any speciality</li>
                            <li>20% Off on prescription medicines</li>
                            <li>20% Off on tests & checkups</li>
                            <li>10 Free in-Clinic consulations</li>
                        </ul>
                    </div>
                    <div className="price">
                        <div>
                            3999<span>/year</span>
                        </div>
                        <a href="">View Plan Details</a>
                        <button>Buy Plan</button>
                    </div>
                </div>
                <div className="plans comprehensive-plan">
                    <div className="content">
                        <div className="header">
                            <hr className="top-hr" />
                            <h3>Comprehensive Plan</h3>
                            <hr className="bottom-hr" />
                        </div>
                        <ul>
                            <li>Unlimited Consultation with any speciality</li>
                            <li>20% Off on prescription medicines</li>
                            <li>20% Off on tests & checkups</li>
                            <li>10 Free In-Clinic consultations</li>
                            <li>2 Master health checkups</li>
                        </ul>
                    </div>
                    <div className="price">
                        <div>
                            5999<span>/year</span>
                        </div>
                        <a href="">View Plan Details</a>
                        <button>Buy Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Pricing
