import React from 'react'

const ResortView = ({ resortDetails }) => {
    console.log('DETAILS ', resortDetails);
    
    return (
        <h2>hello</h2>
        // <div style={{
        //     display: 'inline-block',
        //     verticalAlign: 'top',
        //     width: '400px',
        //     height: '300px',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     margin: '10px',
        //     boxShadow: '#7993c3 4px 4px 3px',
        //     padding: '20px',
        // }}>
        //     <h1 style={{
        //         color: 'white',
        //         fontSize: '50px',
        //         textShadow: 'black 2px 2px 5px',
        //         margin: 'auto',
        //         textAlign: 'center',
        //     }}>{resortDetails.name.toUpperCase()}</h1>
        // </div>
    )
}

export default ResortView