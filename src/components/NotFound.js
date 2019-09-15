import React from 'react'

const NotFound = ({ resortName }) => {
    return (
            <div style={{
                width: '100%',
                height: '100%',
                background: `url(https://www.skibro.com/blog/wp-content/uploads/2019/02/ski-snowboard-lessons-in-les-houches.jpg) #ebf4f7`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'block',
                position: 'fixed',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '50px',
                    textShadow: 'black 2px 2px 5px',
                    margin: '80px auto',
                    textAlign: 'center',
                }}>{resortName ? resortName : '¯\\_(ツ)_/¯'}</h1>
                <a href="/" style={{
                    display: 'block',
                    fontSize: '35px',
                    fontWeight: '800',
                    textShadow: 'black 2px 2px 5px',
                    margin: '40px auto',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: '#00b4ff',
                }}>{resortName ? 'Details coming soon...Go back to all resorts' : 'Go back to all resorts'}</a>
            </div>
    )
}

export default NotFound