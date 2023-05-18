import paymentprocessing from '../resources/payment-processing.png';
import customersupport from '../resources/customer-support.png';
import styles from '../styles.module.css'
import aboutusone from "../resources/about-us-1.png";
import aboutustwo from "../resources/about-us-2.png";
const Services = () => {
    return(
        <div className="container" id="services-section">
            <h5 className="card-title">Services</h5>
            <div className={`card bg-light d-flex border-0`}>
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <span className={`${styles[`left-card-text`]}`}>
                        <h5 className="card-title">Payment Processing Services</h5>
                        <p className="card-text">
                            PayWavez provides a wide range of payment processing services designed to meet the needs of businesses in different industries. Whether you need to process credit card payments, mobile payments, or online transactions, we have a solution that can help.
Our payment gateway is designed to be fast, secure, and reliable, ensuring that your transactions are processed quickly and accurately. We also offer fraud detection and prevention tools to help protect your business from fraudulent activity

                        </p>
                    </span>
                    <img src={paymentprocessing} alt="about us first image" height="250px"/>

                </div>
            </div>
            <div className="card bg-light border-0">
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <img src={customersupport} alt="about us first image" height="250px"/>
                    <div className={`${styles[`right-card-text`]}`}>
                        <h5 className="card-title">Customer Support</h5>
                        <p className="card-text ms-2">
                            At PayWavez, we understand that customer support is critical to the success of any business. That's why we offer 24/7 support to all of our customers, with dedicated account managers who are available to answer questions and provide assistance whenever you need it.
                            Our support team is highly trained and knowledgeable, with years of experience in the payment processing industry. Whether you need help setting up your account, troubleshooting technical issues, or resolving billing disputes, we're here to help.

                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Services;