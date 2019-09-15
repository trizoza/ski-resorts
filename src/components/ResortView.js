import React, { Fragment, } from 'react'

import NotFound from './NotFound'

const ResortView = ({ resortDetails }) => {
    const fullDetails = resortDetails.name && resortDetails.altitude_bottom && resortDetails.altitude_top && resortDetails.about && resortDetails.piste_map && resortDetails.piste_map_caption
    return (
        <Fragment>
            {fullDetails && <div style={{
                display: 'block',
                position: 'fixed',
                width: '100%',
                height: '100%',
                overflow: 'scroll',
                background: `url(${resortDetails["hero_background"]})`,
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
                }}>{resortDetails.altitude_bottom} - {resortDetails.altitude_top}</p>
                <span style={{
                    display: 'block',
                    width: '80%',
                    color: 'white',
                    fontSize: '20px',
                    textShadow: 'black 2px 2px 5px',
                    margin: '20px auto',
                    textAlign: 'justify',
                    fontWeight: '400',
                }}>{resortDetails.about}</span>
                <img src={resortDetails.piste_map} alt={resortDetails.piste_map_caption} style={{
                    display: 'block',
                    width: '80%',
                    margin: '20px auto',
                }}></img>
            </div>}
            {!fullDetails && <NotFound resortName={resortDetails.name.toUpperCase()}/>}
        </Fragment>

    )
}

export default ResortView