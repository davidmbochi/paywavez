import globalreach from "../resources/global-reach.png";
import styles from "../styles.module.css";

const GlobalReach = () => {
    return(
        <div className="container mt-3">
            <div className="card bg-light border-0">
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <img src={globalreach} alt="about us first image" height="250px"/>
                    <div className={`${styles[`right-card-text`]}`}>
                        <h5 className="card-title ms-2">Global reach</h5>
                        <p className="card-text ms-2">
                            PayWavez has a global reach, enabling customers to make and receive payments from anywhere in the world. The platform supports multiple currencies and payment methods, making it easy for customers to transact in their preferred currency and payment method.
                            This global reach is made possible by PayWavez's partnerships with leading banks and financial institutions around the world. These partnerships enable the platform to offer a wide range of payment options and ensure that transactions are processed seamlessly across different countries and regions.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default GlobalReach;