import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head'
import Sidenav from './components/sidenav'
export default function App({ Component, pageProps }) {

  return (
    <div className='container-fluid'>
      <Head>
        <title>Quoting Tool</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/3874/3874387.png" />
      </Head>
      <div className='row'>
        <div className='col-lg-2'>
          <Sidenav />
        </div>
        <div className="col-lg-10">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}
