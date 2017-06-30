import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import stylesheet from 'styles/nprogress.scss'

Router.onRouteChangeStart = (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  margin: '0 10px 0 0'
}

export default () => (
  <div style={{ marginBottom: 20 }}>
    <Head>
      {/* Import CSS for nprogress */}
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
  </div>
)