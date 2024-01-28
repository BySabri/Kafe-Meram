import React from 'react'
import "./menu.css"
import menu from "./menu.png"
export default function Menu() {
  return (
    <>
        <div className='menu-container' id='menulerimiz'> 
            <div className='menu-grid'>
                <div className='menu-flex menu1'>
                    <h2>Huzur</h2>
                    <img src={menu} alt="" />
                    <a href="http://kafemeram.com/huzur/menu.php"> Dijital Menü İçin Tıkla</a>
                </div>
                <div className='menu-flex menu2'>
                    <h2>Yeniyol</h2>
                    <img src={menu} alt="" />
                    <a href="https://kafemeram.com/yeniyol/menu.php"> Dijital Menü İçin Tıkla</a>
                </div>
                <div className='menu-flex menu3'>
                    <h2>Yenice</h2>
                    <img src={menu} alt="" />
                    <a href="http://kafemeram.com/yenice/menu.php"> Dijital Menü İçin Tıkla</a>
                </div>
                <div className='menu-flex menu4'>
                    <h2>Berlika</h2>
                    <img src={menu} alt="" />
                    <a href="http://kafemeram.com/berlika/menu.php"> Dijital Menü İçin Tıkla</a>
                </div>
            </div>
        </div>
    </>
  )
}
