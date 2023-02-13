import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function ZoteroPage() {
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
    const zotero_id = url.split('/items/')[1]
    const meta_content = `0; URL=zotero://select/library/items/${zotero_id}`
    return (
      <Head>
        {zotero_id && <meta http-equiv="refresh" content={meta_content} />}
      </Head>
    )
  }

  return <></>
}

export default ZoteroPage
