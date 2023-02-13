import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function ObsidianPage() {
  const router = useRouter()
  const { url, file } = router.query

  useEffect(() => {
    if (file) {
      const timeout = setTimeout(() => {
        window.close()
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [file])

  if (file) {
    const meta_content = `0; URL=${url}&file=${file}`
    return (
      <>
        <Head>{<meta http-equiv="refresh" content={meta_content} />}</Head>
        <h1>Obsidian Hook</h1>
        <div>Close after 3s..</div>
      </>
    )
  }

  return <h1>Obsidian Hook</h1>
}

export default ObsidianPage
