import styles from "../styles.module.css";
import competitiverates from "../resources/competitive-rates.png";

const CompetitiveRates = () => {
    return(
        <div className="container mt-3">
            <div className="card bg-light border-0">
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <div className={`${styles[`left-card-text`]}`}>
                        <h5 className="card-title">Competitive rates</h5>
                        <p className="card-text">
                            PayWavez offers competitive rates for its payment services, making it an attractive option for businesses and individuals looking for cost-effective payment solutions. The platform's pricing model is transparent and straightforward, with no hidden fees or charges.
                            Customers can also benefit from volume discounts and other incentives that are offered by PayWavez. This makes it possible for businesses to save money on transaction fees and other costs associated with payment processing, enabling them to reinvest the savings into their operations and growth strategies.
                        </p>
                    </div>
                    <img src={competitiverates} alt="about us first image" height="250px"/>

                </div>
            </div>
        </div>
    )
}
export default CompetitiveRates;