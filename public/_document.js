import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
            <meta charSet="utf-8" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900" rel="stylesheet" />
            {/* <!--
            SOFTY PINKO
            https://templatemo.com/tm-535-softy-pinko
            --> */}

                {/* <!-- Additional CSS Files --> */}
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.css" />

            <link rel="stylesheet" href="/assets/css/templatemo-softy-pinko.css" />
        <body>
          <Main />
          <NextScript />
            {/* <!-- jQuery --> */}
            <script src="/assets/js/jquery-2.1.0.min.js"></script>

            {/* <!-- Bootstrap --> */}
            <script src="/assets/js/popper.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>

            {/* <!-- Plugins --> */}
            <script src="/assets/js/scrollreveal.min.js"></script>
            <script src="/assets/js/waypoints.min.js"></script>
            <script src="/assets/js/jquery.counterup.min.js"></script>
            <script src="/assets/js/imgfix.min.js"></script> 
            
            {/* <!-- Global Init --> */}
            <script src="/assets/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument