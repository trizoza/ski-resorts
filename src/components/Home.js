import React, { useState, useEffect, } from 'react'
import axios from 'axios'

import ResortPreview from './ResortPreview'

const Home = () => {
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

    if (resorts.length > 0) {
        return (
            <div className="Home">
                {resorts.map(resort => {
                    return <ResortPreview
                        key={resort["_id"]}
                        details={resort}
                    />
                })}
            </div>
        )
    } else {
        return (
            <div className="Home">
                Loading...
            </div>
        )
    }
}

export default Home