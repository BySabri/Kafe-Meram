import React from 'react'
import "../sube.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import sube2 from "./sube-2.jpg"
import sube22 from "./sube-2-2.jpg"
import sube23 from "./sube-2-3.jpg"
import sube24 from "./sube-2-4.jpg"

export default function Sube2() {
  return (
    <>
      <div className='sube-cont'>
        <div className='sube-text'>
          <div className='h1andlocation'>
            <h1>Yenice</h1>
          </div>
          <h2>Kafe Meram Yenice Şubesi</h2>
          <p>Yenice şubemizde serpme kahvaltımız vardır. Otopark ve çocuk oyun alanları mevcuttur.Yenice şubemiz, Yenice parkı içerisindedir.</p>
          <div className='location'>
            <a href="https://g.page/kafemeramyenice?share" className='location-flex'><h3>Konum:</h3><FontAwesomeIcon icon={faLocationDot} size="2xl" /></a>
          </div>
        </div>
        <div className='sube-img'>
          <div className='sube-col'>
            <img src={sube2} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube22} alt="Kafe Meram Huzur Şubesi" />
          </div>
          <div className='sube-col'>
            <img src={sube23} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube24} alt="Kafe Meram Huzur Şubesi" />
          </div>
        </div>
      </div>
    </>
  )
}
