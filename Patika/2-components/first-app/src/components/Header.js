import React from 'react'
import PropTypes from "prop-types"

function Header({titleName,desc,isLoggedIn,age,address}) {
  return (
    <div>
      <h1>Header</h1> 
    </div>
  )
}

Header.propTypes = {
  titleName: PropTypes.string.isRequired, //gelen props ların tiplerini belirlemeye yarıyor proptypes, isRequired ile de bu propun zorunlu olduğunu belirtmiş oluyoruz.
  desc: PropTypes.string,
  age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]), //bir prop birden fazla tipi kabul ederse oneOfType ile yazarız içine array alır.
  isLoggedIn: PropTypes.bool,
  address: PropTypes.shape({ // gelen props obje ise shape ile tip değerlerini belirleriz. İçine obje ile o propertdeki değerleri belirleriz
    city: PropTypes.string,
    zip: PropTypes.number
  })
}

Header.defaultProps = { //varsayılam olarak bu şekilde değer veriyoruz gelen propsa
  age: 10
}

export default Header;
