import React from 'react'

const ResortPreview = ({ id, name, slug }) => <div className="preview">
    <a href={`/${slug}`}>{name}</a>
</div>

export default ResortPreview