import React from 'react'
import "../sube.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import sube4 from "./sube-4.jpg"
import sube42 from "./sube-4-2.jpg"
import sube43 from "./sube-4-3.jpg"
import sube44 from "./sube-4-4.jpg"

export default function Sube4() {
  return (
    <>
      <div className='sube-cont'>
        <div className='sube-text'>
          <div className='h1andlocation'>
            <h1>Berlika</h1>
          </div>
          <h2>Kafe Meram Berlika Şubesi</h2>
          <p>Kafe Meram Berlika şubemiz,Meram Belediyesi Berlika parkı içerisindedir.Çocuklara hitap eden kafemizde akülü araçlar ve çocuklar için eşsiz lezzetler bulunmaktadır.</p>        
          <div className='location'>
            <a href="https://goo.gl/maps/R8XmbRrmsYR3e1gd6" className='location-flex'><h3>Konum:</h3><FontAwesomeIcon icon={faLocationDot} size="2xl" /></a>
          </div>
        </div>

        <div className='sube-img'>
          <div className='sube-col'>
            <img src={sube4} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube42} alt="Kafe Meram Huzur Şubesi" />
          </div>
          <div className='sube-col'>
            <img src={sube43} alt="Kafe Meram Huzur Şubesi" />
            <img src={sube44} alt="Kafe Meram Huzur Şubesi" />
          </div>
        </div>
      </div>
    </>
  )
}