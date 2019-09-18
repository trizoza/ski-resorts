import React from 'react'

const ResortPreview = ({ details, onClick }) => {
    return (
        <div style={{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '400px',
            height: '300px',
            background: `url(${details.previewImage ? details.previewImage : ""}) #ebf4f7`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            margin: '10px',
            boxShadow: '#07080a 2px 2px 9px',
            padding: '20px',
        }}
        onClick={onClick}>
            <h1 style={{
                color: 'white',
                fontSize: '50px',
                textShadow: 'black 2px 2px 5px',
                margin: 'auto',
                textAlign: 'center',
            }}>{details.name.toUpperCase()}</h1>
            {!details.previewImage && <p style={{
                    color: 'white',
                    fontSize: '30px',
                    textShadow: 'black 2px 2px 5px',
                    margin: 'auto',
                    textAlign: 'center',
                    fontWeight: '300',
                }}>Coming soon...</p>}
        </div>
    )
}

export default ResortPreview
