import React from 'react'
import "../sube.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import sube3 from "./sube-3.jpg"
import sube32 from "./sube-3-2.jpg"
import sube33 from "./sube-3-3.jpg"
import sube34 from "./sube-3-4.jpg"

export default function Sube3() {
  return (
    <>
      <div className='sube-cont'>
        <div className='sube-text'>
          <div className='h1andlocation'>
            <h1>Yeniyol</h1>
          </div>
          <h2>Kafe Meram Yeniyol Şubesi</h2>
          <p>Kafe Meram Yeniyol şubemiz,Meram Belediyesi Trafik parkı içerisindedir.Çocuklara hitap eden kafemizde akülü araçlar ve çocuklar için eşsiz lezzetler bulunmaktadır.</p>
          <div className='location'>
            <a href="https://goo.gl/maps/9YhuRUnuC92syNqZ6" className='location-flex'><h3>Konum:</h3><FontAwesomeIcon icon={faLocationDot} size="2xl" /></a>
          </div>
        </div>
        <div className='sube-img'>
          <div className='sube-col'>
            <img src={sube3} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube32} alt="Kafe Meram Huzur Şubesi" />
          </div>
          <div className='sube-col'>
            <img src={sube33} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube34} alt="Kafe Meram Huzur Şubesi" />
          </div>
        </div>
      </div>
    </>
  )
}