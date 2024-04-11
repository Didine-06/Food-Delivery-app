import React, { useState, useEffect } from 'react'
import './home.css'
import Header from '../../componnents/header/Header'
import ExploreMenu from '../../componnents/ExploreMenu/ExploreMenu'
import Menu from '../../componnents/Menu/Menu'





function Homme() {

  const [isactive, setisactive] = useState("all")
  



  return (
    <div className='home'>
      <Header />
      <ExploreMenu isactive={isactive} setisactive={setisactive} />
      <Menu category={isactive} />
     
      

    </div>
  )
}

export default Homme;
