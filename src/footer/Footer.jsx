import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot,} from '@fortawesome/free-solid-svg-icons'
import { faXTwitter,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
export default function Footer (){

    return(
        <>
            <footer id="footer">
                <div className="contact"> 
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <a href="tel:444 52 33">
							<span><FontAwesomeIcon icon={faPhone} /></span>444 52 33</a>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-flex" >
                                <a target="_blank" href="mailto:huzur@kafemeram.com"><span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <strong>huzur@kafemeram.com</strong></a>

                                <a target="_blank" href="mailto:yenice@kafemeram.com"><span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <strong>yenice@kafemeram.com</strong></a>
                            </div>
                            <div className="contact-flex">
                                <a target="_blank" href="mailto:yeniyol@kafemeram.com"><span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <strong>yeniyol@kafemeram.com</strong></a>

                                <a target="_blank" href="mailto:berlika@kafemeram.com"><span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <strong>berlika@kafemeram.com</strong></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="row">
                            <div className="contact-info-item">
                                <a href="https://twitter.com/kafemeram" target="blank" ><FontAwesomeIcon icon={faXTwitter} size="2xl"/></a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://www.instagram.com/kafemeram/" target="blank"><FontAwesomeIcon icon={faInstagram} 
                                size="2xl"/></a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://www.facebook.com/kafemeramm" target="blank"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </footer>
        </>
    )

}