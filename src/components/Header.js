import styles from '../styles.module.css';
import paywavezlogo from '../resources/paywavez-logo.png'
import {Link} from "react-router-dom";
const Header = ({scrollToAboutUs,
                    scrollToPaymentMethods,
                    scrollToServices,
                    scrollToContacts}) => {
    return(
       <nav className={`navbar navbar-expand-lg navbar-light  ${styles[`header`]}`}>
           <div className={`container align-items-end`}>
               <div className={`${styles[`brand-content`]}`}>
                   <Link href="#">
                       <img src={paywavezlogo} alt="paywavez logo" height="50px"/>
                   </Link>
                   <span className={`${styles[`brand-info`]}`}>
                       <Link href="#" className={`navbar-brand text-white ${styles[`brand`]}`} href="#">PayWavez</Link>
                       <span className={`text-dark mt-0 ${styles[`brand-text`]}`}>The ultimate online payment solution
                   </span>

               </span>
               </div>
               <button className="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarNav"
                       aria-controls="navbarNav"
                       aria-expanded="false"
                       aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                   <ul className={`navbar-nav`}>
                       <li className="nav-item">
                           <Link className="nav-link text-white " onClick={scrollToAboutUs}>Home</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link text-white" onClick={scrollToServices}>Services</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link text-white" onClick={scrollToPaymentMethods}>Payment methods</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link text-white" onClick={scrollToContacts}>Contacts</Link>
                       </li>
                   </ul>

               </div>


           </div>
       </nav>
    )
}
export default Header;