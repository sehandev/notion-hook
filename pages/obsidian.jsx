import Head from 'next/head'
import { useRouter } from 'next/router'

function ObsidianPage() {
  const router = useRouter()
  const { url, file } = router.query

  if (file) {
    const meta_content = `0; URL=${url}&file=${file}`
    return <Head>{<meta http-equiv="refresh" content={meta_content} />}</Head>
  }

  return <>Obsidian Hook</>
}

export default ObsidianPage
