import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import ResortPreview from './ResortPreview'
import ResortView from './ResortView'

const Home = () => {
    const [state, setState] = useState({
        resorts: [],
        viewedResort: "",
        viewedResortDetails: {},
    })

    useEffect(() => {
        axios
            .get(
                "https://apiv2-staging.skibro.net/resorts"
            )
            .then(({ data }) => {
                if (data && data.items) {
                    const resorts = (data.items)
                    setState({
                        ...state,
                        resorts,
                    })
                } else {
                    throw new Error("No items found")
                }
            })
            .catch(err => {
                console.error('ERR', err)
                setState({
                    ...state,
                    resorts: []
                })
            })
    }, [])


    if (state.resorts.length > 0 && state.viewedResort === "") {
        return (
            <Fragment>
                {state.resorts.map(resort => <ResortPreview
                    key={resort["_id"]}
                    details={resort}
                    onClick={() =>
                        setState({
                            ...state,
                            viewedResort: resort["_id"],
                            viewedResortDetails: resort,
                        })
                    }
                />)}
            </Fragment>
        )
    } else if (state.resorts.length > 0 && state.viewedResort !== "") {
        return (
            <ResortView resortDetails={state.viewedResortDetails} />
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default Home