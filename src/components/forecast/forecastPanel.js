import React from 'react'

import {dayOfWeekPtBr, conditionsPtBr} from '../../../utils/constants'

import closeIcon from 'src/assets/close.svg'
import arrowDown from 'src/assets/arrow-down.svg'
import arrowUp from 'src/assets/arrow-up.svg'

const ForecastPainel = ({ weather, handleClosePanel, isMobile }) => (
  <div className='forecast-panel'>
    <div className='forecast-panel-top'>
      <div>
        <p className='forecast-panel-city'>{weather.location.city}, {weather.location.region} - {weather.location.country}</p>

        <p className='forecast-panel-condition'>{weather.item.condition.temp}°C {conditionsPtBr[weather.item.condition.code]}</p>

        <table className='forecast-panel-table-today'>
          <tbody>
            <tr >

              <td >
                <span>
                  <img src={arrowDown} />
                </span>
                <span>
                  {weather.item.forecast[0].low}°C
                </span>
                <span className='forecast-panel-table-arrow-up'>
                  <img src={arrowUp} />
                </span>
                <span>
                  {weather.item.forecast[0].high}°C
                </span>
              </td>

              <td>Sensação <span>{((weather.wind.chill - 32) / 1.8).toFixed(0)}°C</span></td>

            </tr>
            <tr>
              <td>Vento <span>{Number(weather.wind.speed).toFixed(0)}km/h</span></td>
              <td>Umidade <span>{weather.atmosphere.humidity}%</span></td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className='forecast-panel-close'>
        <span onClick={() => handleClosePanel()}><img src={closeIcon} /></span>
      </div>
    </div>

    <div>
      <table className='forecast-panel-table-nextdays'>
        <thead>
          <tr>
            {weather.item.forecast
            .filter((item, index) => index >= 1 && index <= (isMobile ? 4 : 5))
            .map((item, index) => (
              <th key={item.date}>
                <p>{dayOfWeekPtBr[item.day]}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weather.item.forecast
            .filter((item, index) => index >= 1 && index <= (isMobile ? 4 : 5))
            .map((item, index) => (
              <td key={item.date}>
                <p>{item.low}° {item.high}°</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default ForecastPainel
