import React from 'react'

import searchIcon from '../../assets/search.svg'

const SearchCityInput = ({ handleChangeSearchField, searchField, handleSearchWeather }) => (
  <div className='search-field'>
    <div className='search-input'>
      <input
        type='text'
        onChange={(e) => handleChangeSearchField(e)}
        value={searchField}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            handleSearchWeather(searchField)
          }
        }}
        placeholder='Insira aqui o nome da cidade' />

      <button className='btn-search' onClick={() => handleSearchWeather(searchField)}><img src={searchIcon} /></button>
    </div>
  </div>
)

export default SearchCityInput
