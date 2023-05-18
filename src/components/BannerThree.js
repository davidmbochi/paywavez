import paypaltransactions from "../resources/paypal-transactions.png";
import styles from '../styles.module.css'
import bannertwo from "../resources/banner-two.png";
const BannerThree = () => {
    return(
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <img  className="mt-3" src={paypaltransactions} alt="banner image" />

                    </div>
                </div>

            </div>

        </div>

    )
}
export default BannerThree;