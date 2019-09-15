import React, { useState, useEffect, } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {
  const [resorts, setResorts] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://apiv2-staging.skibro.net/resorts"
      )
      .then(({ data }) => {
        if (data && data.items) {
          const resorts = (data.items)
          setResorts(resorts)
        } else {
          throw new Error("No items found")
        }
      })
      .catch(err => {
        console.error('ERR', err)
        setResorts([])
      })
  }, [])

  return resorts.length > 0 ? (
    <div className="App">
      <ul>
        {resorts.map(resort => {
          console.log('RESORT ', resort)
          return <p key={resort["_id"]}>{resort["name"]}</p>
        })}
      </ul>
    </div>
  ):(
    <div className="App">
      Loading...
    </div>
  )
}

export default App
