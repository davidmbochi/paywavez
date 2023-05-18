import styles from '../styles.module.css';
import {Link} from "react-router-dom";
import emaillogo from '../resources/email-logo.png';
import linkedinlogo from '../resources/linkedin-logo.png'
import twitterlogo from '../resources/twitter-logo.png'
import whatsapplogo from '../resources/whatsapp-logo.png'
import telegramlogo from '../resources/telegram-logo.png'
const Contacts = ({handleWhatsAppClick}) => {
    return(
        <div className={`container-fluid pb-lg-5 ${styles['contacts']}`} id="contacts-section">
            <div className="row">
                <div className="col-md-4">
                    <h5 className="text-white mt-3">Get in touch</h5>
                    <p className="text-white">Use the options below to find us</p>
                    <div className="d-flex ms-5">
                        <div>
                            <img src={emaillogo} alt="about us first image" height="20px"/>

                        </div>
                        <div>
                            <Link className="card-title ms-2 text-decoration-none text-white">info@paywavez.com</Link>

                        </div>
                    </div>
                    <div className="d-flex ms-5">
                        <div>
                            <img src={linkedinlogo} alt="about us first image" height="20px"/>

                        </div>
                        <div>
                            <Link className="card-title ms-2 text-decoration-none text-white">PayWavez</Link>

                        </div>
                    </div>
                    <div className="d-flex ms-5">
                        <div>
                            <img src={twitterlogo} alt="about us first image" height="20px"/>

                        </div>
                        <div>
                            <Link className="card-title ms-2 text-decoration-none text-white">PayWavez</Link>

                        </div>
                    </div>
                    <div className="d-flex ms-5">
                        <div>
                            <img src={whatsapplogo} alt="about us first image" height="20px"/>

                        </div>
                        <div>
                            <Link className="card-title ms-2 text-decoration-none text-white" to="/" onClick={handleWhatsAppClick}>
                            PayWavez
                            </Link>

                        </div>
                    </div>
                    <div className="d-flex ms-5">
                        <div>
                            <img src={telegramlogo} alt="about us first image" height="20px"/>

                        </div>
                        <div>
                            <Link className="card-title ms-2 text-decoration-none text-white">PayWavez</Link>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-white mt-3">Legal</h5>
                    <div>
                        <Link className="text-white text-decoration-none">Terms</Link>

                    </div>
                    <div>
                        <Link className="text-white text-decoration-none">Privacy</Link>

                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-white mt-3">Resource</h5>
                    <div>
                        <Link className="text-decoration-none text-white">Careers</Link>

                    </div>
                    <div>
                        <Link className="text-decoration-none text-white">Blog</Link>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center mt-5">
                        <h5 className="text-white">&#169;2023 PayWavez, Inc. All rights reserved</h5>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Contacts;