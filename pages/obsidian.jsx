import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function ObsidianPage() {
  const router = useRouter()
  const { url, file } = router.query

  if (file) {
    const meta_content = `0; URL=${url}&file=${file}`
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.close()
      }, 1000)

      return () => clearTimeout(timeout)
    }, [])
    return <Head>{<meta http-equiv="refresh" content={meta_content} />}</Head>
  }

  return (
    <>
      <h1>Obsidian Hook</h1>
      <div>Close after 1s..</div>
    </>
  )
}

export default ObsidianPage
