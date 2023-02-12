import Head from "next/head"
import { useRouter } from "next/router"

function Page() {
  const router = useRouter()
  const { zotero_id } = router.query

    const meta_content = `0; URL=zotero://select/library/items/${zotero_id}`
    return (
      <Head>
        {zotero_id && <meta http-equiv="refresh" content={meta_content} />}
      </Head>
    )
  return <></>
}

export default Page
