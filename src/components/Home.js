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


    return (
        <div style={{
            backgroundColor: '#1b365d',
        }}>
            <div style={{
                display: 'block',
                height: '60px',
                width: '100%',
                boxShadow: 'black 0px 3px 5px',
                top: '0px',
                left: '0px',
            }}>
                <a href="/">
                    <img src="https://www.skibro.com/en/static/media/logo.e4d10eb7.svg" height="64px"></img>
                </a>
            </div>
            {state.resorts.length > 0 && state.viewedResort === "" &&
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
                </Fragment>}
            {state.resorts.length > 0 && state.viewedResort !== "" &&
                <ResortView resortDetails={state.viewedResortDetails} />}
            {state.resorts.length == 0 &&
                <div>Loading...</div>}
        </div>
    )

}

export default Home