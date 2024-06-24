import React from 'react'
import PropTypes from "prop-types"

function Header({titleName,desc,isLoggedIn}) {
  return (
    <div>
      <h1>Header</h1> 
    </div>
  )
}

Header.prototype= {
  titleName: PropTypes.string.isRequired, //gelen props ların tiplerini belirlemeye yarıyor proptypes, isRequired ile de bu propun zorunlu olduğunu belirtmiş oluyoruz.
  desc: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default Header;
