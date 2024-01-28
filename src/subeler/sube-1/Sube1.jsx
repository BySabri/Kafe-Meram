import React from 'react'
import "../sube.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import sube1 from "./sube-1.jpg"
import sube12 from "./sube-1-2.jpg"
import sube13 from "./sube-1-3.jpg"
import sube14 from "./sube-1-4.jpg"

export default function Sube1() {


  return(
   <>
      <div className='sube-cont'>
         <div className='sube-text'>
            <div className='h1andlocation'>
            <h1>Huzur</h1>
            </div>
            <h2>Kafe Meram Huzur Şubesi</h2>
            <p>Kafe Meram Huzur şubemiz,Konya Meram Dr.İsmail Işık Huzurevi karşısındadır. Kafe & Resturant olarak faaliyet göstermektedir.Huzur şubemizde serpme kahvaltımız vardır. Otopark, çocuk oyun alanları ve eşsiz Konya manzarasına sahiptir.</p>
            <div className='location'>
                  <a href="https://goo.gl/maps/CVUF3fkr1oMhZ8PX6" className='location-flex'><h3>Konum:</h3><FontAwesomeIcon icon={faLocationDot} size="2xl"/></a>
            </div>
         </div>
         <div className='sube-img'>
            <div className='sube-col'> 
            <img src={sube1} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube12} alt="Kafe Meram Huzur Şubesi" />
            </div>
            <div className='sube-col'>
            <img src={sube13} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube14} alt="Kafe Meram Huzur Şubesi" />
            </div>
         </div>
     </div>
  </>
  )
}
