import React,{memo} from 'react'

const Header = memo(({count,data,increment}) => {
    return (
      <div>
        Header - {count} <br />
        { JSON.stringify(data) } <br />
        <button onClick={increment}> Tıkla </button>
      </div>
    )
})

export default Header
