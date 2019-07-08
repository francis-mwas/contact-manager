import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1 className="display-4"><span className="text-danger">404 </span>Page Not Found</h1>
            <p>Sorry, page not found</p>
            <p>Go back to home page<Link to="/"><span className="lead">  HOME</span></Link></p>
        </div>
    )
}
