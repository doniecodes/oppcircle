import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="notFoundWrapper">
      <FaExclamationTriangle
      className="notFoundIcon"
      />
      <p className="notFoundText">
        The page you are looking for is not here!
      </p>
      <Link to="/" className="notFoundLink">
        Back to Homepage
      </Link>
    </section>
  )
}

export default NotFoundPage