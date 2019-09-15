import React from 'react'

const ResortPreview = ({ details }) => {
    return (
        <a href={details.slug} style={{
            textDecoration: 'none',
            display: 'inline-block',
            verticalAlign: 'top',
        }}>
            <div style={{
                width: '400px',
                height: '300px',
                background: `url(${details.preview_image ? details.preview_image : ""}) #ebf4f7`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: '10px',
                boxShadow: '#7993c3 4px 4px 3px',
                padding: '20px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '50px',
                    textShadow: 'black 2px 2px 5px',
                    margin: 'auto',
                    textAlign: 'center',
                }}>{details.name.toUpperCase()}</h1>
            </div>
        </a>
    )
}

export default ResortPreview