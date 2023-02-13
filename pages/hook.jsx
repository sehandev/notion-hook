import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function HookPage() {
  const router = useRouter()
  const { url } = router.query

  useEffect(() => {
    if (url) {
      const timeout = setTimeout(() => {
        window.close()
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [])

  if (url) {
    const meta_content = `0; URL=${url}`
    return <Head>{<meta http-equiv="refresh" content={meta_content} />}</Head>
  }

  return <></>
}

export default HookPage
