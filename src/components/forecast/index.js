import React from 'react'
import ForecastPanel from './forecastPanel'

const Forecast = ({ weather, panel, handleClosePanel, isMobile }) => (
  !!weather && <div className='forecast'>

    {panel.isOpen && <ForecastPanel weather={weather} handleClosePanel={handleClosePanel} isMobile={isMobile} />}

  </div>
)

export default Forecast
