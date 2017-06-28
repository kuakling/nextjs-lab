import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import stylesheet from 'styles/index.scss'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='stylesheet' href='/static/react-md.min.css' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
          <title>Hello NextJs</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}