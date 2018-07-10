import React from 'react'

const TableOfCapitals = ({ capitals }) => (
  <table>
    <thead>
      <tr>
        <td>Min</td>
        <td>Máx</td>
        <td />
      </tr>
    </thead>
    <tbody>
      {capitals.map(capital => (
        <tr key={capital.city}>
          <td>{capital.forecast.low}°</td>
          <td>{capital.forecast.high}°</td>
          <td>{capital.city}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default TableOfCapitals
