import React, { Fragment, } from 'react'

import NotFound from './NotFound'

function setHtml(html) { return {__html: html} }

const ResortView = ({ resortDetails }) => {
    const fullDetails = resortDetails.name 
    && resortDetails.resortAltitude 
    && resortDetails.altitudeTop 
    && resortDetails.about 
    && resortDetails.pisteMap 
    && resortDetails.pisteMapCaption
    return (
        <Fragment>
            {fullDetails && <div style={{
                display: 'block',
                position: 'fixed',
                width: '100%',
                height: '100%',
                overflow: 'scroll',
                background: `url(${resortDetails["heroBackground"]})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '20px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '50px',
                    textShadow: 'black 2px 2px 5px',
                    margin: 'auto',
                    textAlign: 'center',
                }}>{resortDetails.name.toUpperCase()}</h1>
                <p style={{
                    color: 'white',
                    fontSize: '30px',
                    textShadow: 'black 2px 2px 5px',
                    margin: 'auto',
                    textAlign: 'center',
                    fontWeight: '700',
                }}>{resortDetails.resortAltitude} - {resortDetails.altitudeTop}</p>
                <div style={{
                    display: 'block',
                    width: '80%',
                    color: 'white',
                    fontSize: '20px',
                    textShadow: 'black 2px 2px 5px',
                    margin: '20px auto',
                    textAlign: 'justify',
                    fontWeight: '400',
                }} dangerouslySetInnerHTML={setHtml(resortDetails.about)} />
                <img src={resortDetails.pisteMap} alt={resortDetails.pisteMapCaption} style={{
                    display: 'block',
                    width: '80%',
                    margin: '20px auto',
                }}></img>
                <div style={{
                    display: 'block',
                    width: '482px',
                    height: '336px',
                    margin: '20px auto',
                }} dangerouslySetInnerHTML={setHtml(resortDetails.snowForecast)} />
                <div style={{
                    display: 'block',
                    width: '600px',
                    height: '530px',
                    margin: '20px auto',
                }} dangerouslySetInnerHTML={setHtml(resortDetails.googleMap)} />
            </div>}
            {!fullDetails && <NotFound resortName={resortDetails.name.toUpperCase()}/>}
        </Fragment>

    )
}

export default ResortView
