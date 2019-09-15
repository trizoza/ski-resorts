import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import ResortPreview from './ResortPreview'
import ResortView from './ResortView'
import Header from './Header'

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
            <Header />
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
                <div style={{
                    display: 'block',
                    position: 'fixed',
                    fontSize: '35px',
                    fontWeight: '800',
                    textShadow: 'black 2px 2px 5px',
                    margin: '0px auto',
                    width: '100%',
                    minHeight: '100%',
                    textAlign: 'center',
                    color: '#00b4ff',
                    backgroundColor: '#1b365d',
                }}>Loading...</div>}
        </div>
    )

}

export default Home