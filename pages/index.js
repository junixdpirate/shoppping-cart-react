import Head from '../components/Head'
import Layout from '../components/Layout'
import WhatsNew from '../components/Home/WhatsNew'
import RankItems from '../components/Home/RankItems'
import NewItems from '../components/Home/NewItems'

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>TOPページ</title>
        </Head>
        
        <WhatsNew />
        <RankItems />
        <NewItems />

    </Layout>
  )
}