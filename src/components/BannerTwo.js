import bannertwo from '../resources/banner-two.png'
import banner from "../resources/online-payments.jpg";
const BannerTwo = () => {
    return(
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <img  src={bannertwo} alt="banner image" height="300px"/>

                    </div>
                </div>

            </div>

        </div>

    )
}
export default BannerTwo;