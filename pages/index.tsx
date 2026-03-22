import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MWENCLUBHOUSE</title>
        <meta name="description" content="
          The MWENCLUBHOUSE are services organized by 
          Matthew Wen. Check us out to try some of our 
          upcoming Projects
        " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Website is a Work in Progress</p>
        <p>Things Coming</p>
        <ol>
          <li>Queueup Discord Bot</li>
          <li>Archieve ECE 20001 Website</li>
          <li>A few other dead projects. You will see...</li>
        </ol>
        <p>You can check <a href="https://www.matthewwen.com">https://www.matthewwen.com</a> for Updates</p>
      </div>
    </div>
  )
}

export default Home
