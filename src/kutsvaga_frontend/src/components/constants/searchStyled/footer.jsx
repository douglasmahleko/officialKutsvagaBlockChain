import './footer.css'
import { FaPaperPlane } from "react-icons/fa";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci"
function Footer(){
    return(
        <div>
            <section className="newletter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newletter stay tuned</h1>
                        <span>far away with words</span>
                    </div>
                    <div className="right row">
                        <input type="text" placeholder='Enter email address' />
                        <i><FaPaperPlane size={35}/></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIA</h1>
                        <span>online education and learning</span>
                        <p>In the last 5 years, the demand for ZW Inc.’s technology has been on a steady decline. The revenue has been declining steadily declining</p>
                        <i className="ico"> <CiFacebook size={35} /> </i>
                            <i className="ico"> <CiInstagram size={35} /> </i>
                            <i className="ico"> <CiTwitter size={35} /> </i>
                            <i className="ico"> <CiYoutube size={35} /> </i>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer