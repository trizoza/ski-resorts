import React from 'react'

const ResortPreview = ({ details }) => {
    console.log('RESORT ', details)
    return (
        <div className="preview">
            <a href={`/${details.slug}`}>{details.name}</a>
        </div>
    )
}

export default ResortPreview