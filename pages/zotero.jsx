import Head from 'next/head'
import { useRouter } from 'next/router'

function ZoteroPage() {
  const router = useRouter()
  const { url } = router.query

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
