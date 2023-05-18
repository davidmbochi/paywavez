import aboutusone from '../resources/about-us-1.png'
import aboutustwo from '../resources/about-us-2.png'
import styles from '../styles.module.css'
const AboutUs = () => {
    return(
        <div className="container " id="about-us-section">
            <div className={`card d-flex border-0`}>
                <div className={`card-body bg-light d-flex flex-column flex-md-row justify-content-between`}>
                    <span className={`${styles[`left-card-text`]}`}>
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">PayWavez is an online payment agent that provides reliable,
                            instant and cost-effective payment solutions to businesses and individuals globally.
                            With PayWavez, customers can easily make payments for goods and services from the comfort of their homes or offices without any hassle.
The platform offers a user-friendly interface that makes it easy for customers to navigate and carry out transactions.
                            PayWavez has built a reputation for providing secure and reliable payment solutions, making it a top choice for businesses and individuals looking for a trusted payment agent.</p>
                    </span>
                    <img src={aboutusone} alt="about us first image" height="250px"/>

                </div>
            </div>
            <div className="card bg-light border-0">
                <div className={`card-body d-flex flex-column flex-md-row justify-content-between`}>
                    <img src={aboutustwo} alt="about us first image" height="250px"/>
                    <div className={`${styles[`left-card-text`]}`}>
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
export default AboutUs;