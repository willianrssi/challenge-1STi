'use strict'

import React, { Component } from 'react'
import axios from 'axios'

import Forecast from 'components/forecast'
import Capitals from 'components/capitals'
import SearchCityInput from 'components/searchCityInput'
import Title from './components/title'

import './styles/main.scss'
import { urlApiCapitals } from '../utils/constants'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isMobile: '',
      searchField: '',
      panel: {
        isOpen: false
      },
      weather: '',
      capitals: ''
    }
    this.handleClosePanel = this.handleClosePanel.bind(this)
    this.handleChangeSearchField = this.handleChangeSearchField.bind(this)
    this.handleSearchWeather = this.handleSearchWeather.bind(this)
  }

  componentDidMount () {
    let isMobile = window.screen.width < 768
    this.setState({ isMobile })
    axios.get(urlApiCapitals)
      .then(result => result.data.query.results.channel.map(capital => (
        {
          city: capital.location.city,
          forecast: capital.item.forecast[0]
        }
      ))
  )
    .then(capitals => this.setState({capitals}))
  }

  handleSearchWeather (city) {
    this.setState({isLoading: true})
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
      .then(result => this.setState({ weather: result.data.query.results.channel }))
      .then(this.setState({panel: {isOpen: true}}))
  }

  handleClosePanel () {
    this.setState({panel: {isOpen: false}})
  }

  handleChangeSearchField (e) {
    this.setState({searchField: e.target.value})
  }

  render () {
    return (
      <main className='main'>

        <Title
          panel={this.state.panel}
          isMobile={this.state.isMobile}
        >
          Previsão do Tempo
        </Title>

        <Forecast
          isMobile={this.state.isMobile}
          panel={this.state.panel}
          weather={this.state.weather}
          handleClosePanel={this.handleClosePanel}
          />

        <SearchCityInput
          searchField={this.state.searchField}
          handleSearchWeather={this.handleSearchWeather}
          handleChangeSearchField={this.handleChangeSearchField}
        />

        <Capitals
          capitals={this.state.capitals}
          isMobile={this.state.isMobile}
          />

      </main>
    )
  }
}

export default App
