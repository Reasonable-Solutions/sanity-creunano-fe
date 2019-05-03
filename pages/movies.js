import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
import styles from './styles/movies'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

const query = `*[_type == "person"] {name}[0...50]
`

export default class Movies extends React.Component {

  static async getInitialProps() {
    return {
      movies: await sanity.fetch(query)
    }
  }

  render() {
    const {movies} = this.props
    return (
      <Layout>
        <div className="movies">
          <ul className="list">
            {movies.map(movie => (
                    <h1> {movie.name} </h1>)
              )}
          </ul>
        </div>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
