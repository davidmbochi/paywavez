import paypal from "../resources/paypal.png";
import btc from '../resources/btc.png';
import usdt from '../resources/usdt.png';
import neteller from '../resources/neteller.png'
import  mukuru from '../resources/mukuru.png'
import moneygram from '../resources/moneygram.png'
import perfectmoney from '../resources/perfectmoney.png'
import skrill from '../resources/skrill.png'
import cashapp from '../resources/cashapp.png'
import westernunion from '../resources/westernunion.png'
import mpesa from '../resources/mpesa-logo.png'

import styles from '../styles.module.css';
import competitiverates from "../resources/competitive-rates.png";

const PaymentMethods = () => {
    return(
        <div className="container mt-3" id="payment-methods-section">
            <h5 className="card-title mb-3">Payment methods</h5>
            <div className="row ">
                <div className="col-md-3">
                    <div className={`card bg-light border-0 `}>
                        <img src={paypal} alt="Image 1" />
                        <div className="card-body bg-light">
                            <h5 className="card-title mt-5">Paypal</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={btc} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">BTC</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={usdt} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">USDT</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={neteller} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">Neteller</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={mukuru} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">Mukuru</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={moneygram} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">MoneyGram</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={perfectmoney} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">Perfect Money</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={skrill} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">Skrill</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={cashapp} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">Cash App</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={westernunion} alt="Image 1"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title">Western Union</h5>


                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card bg-light border-0">
                        <img className="card-img-top" src={mpesa} alt="Image 1" height="206px"/>
                        <div className="card-body bg-light">
                            <h5 className="card-title ">M-PESA</h5>


                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
export default PaymentMethods;