import instantpayments from "../resources/instant-payments.png";
import styles from "../styles.module.css";

const InstantPayments = () => {
    return(
        <div className="container mt-3">
            <div className="card bg-light border-0">
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <img src={instantpayments} alt="about us first image" height="250px"/>
                    <div className={`${styles[`right-card-text`]}`}>
                        <h5 className="card-title ms-2">Instant payments</h5>
                        <p className="card-text ms-2">
                            PayWavez is a reliable, instant and cost-effective payment agent that offers a range of payment solutions to businesses and individuals globally. Its user-friendly interface, robust payment infrastructure, instant payment feature, competitive rates and global reach make it a top choice for anyone looking for a trusted payment agent.
                            With PayWavez, customers can enjoy a seamless payment experience, knowing that their transactions are secure and their funds are safe. Whether you are a business looking for a payment solution or an individual looking to make a payment, PayWavez has got you covered.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default InstantPayments;