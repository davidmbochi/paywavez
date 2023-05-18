import styles from "../styles.module.css";
import reliability from "../resources/reliability.png";

const Reliability = () => {
    return(
        <div className="container mt-3">
            <div className="card  bg-light border-0">
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <div className={`${styles[`left-card-text`]}`}>
                        <h5 className="card-title">Reliability</h5>
                        <p className="card-text">
                            One of the key features of PayWavez is its reliability. The platform is designed to provide customers with a seamless payment experience, ensuring that transactions are processed promptly and accurately. Customers can be confident in the knowledge that their payments will be processed securely and efficiently.
                            PayWavez has invested heavily in building a robust payment infrastructure that can handle large volumes of transactions without compromising on speed or security. This has enabled the platform to maintain a high level of uptime and availability, ensuring that customers can make payments at any time of the day or night.
                        </p>
                    </div>
                    <img src={reliability} alt="about us first image" height="250px"/>

                </div>
            </div>
        </div>
    )
}
export default Reliability;