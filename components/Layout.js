import Head from 'next/head'
import Link from 'next/link'
import globalStyles from './styles/global'
import styles from './styles/layout'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sanity + Creuna Poc</title>
    </Head>
    <nav>
      <Link href="/movies"><a>Movies</a></Link>
      <Link href="/people"><a>People</a></Link>
    </nav>
    <div id="main">
      {props.children}
    </div>
    <footer>
    </footer>
    <style jsx>{styles}</style>
    <style jsx global>{globalStyles}</style>
  </div>
)
