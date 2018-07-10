import React from 'react'
import TableOfCapitals from './tableOfCapitals'

const Capitals = ({ capitals, isMobile }) => (
  capitals ? <div className='capitals'>
    <h2>Capitais</h2>
    {isMobile ? <div className='capitals-tables'> <TableOfCapitals capitals={capitals} /> </div>
        : <div className='capitals-tables'>
          <TableOfCapitals capitals={capitals.slice(0, Math.floor((capitals.length / 2)))} />
          <TableOfCapitals capitals={capitals.slice(Math.floor((capitals.length / 2)))} />
        </div>
    }

  </div>
  : <div className='capitals'>
    <h2>Capitais</h2>
    <div><div className='spinner' /></div> </div>
)

export default Capitals
