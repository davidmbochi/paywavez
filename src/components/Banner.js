
import banner from '../resources/online-payments.jpg';
import styles from '../styles.module.css'
import emaillogo from "../resources/email-logo.png";
import {Link} from "react-router-dom";
const Banner = () => {
    return(
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <img  src={banner} alt="banner image" height="300px"/>

                    </div>
                </div>

            </div>

        </div>

    )
}
export default Banner;