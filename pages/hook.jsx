import Head from "next/head"
import { useRouter } from "next/router"

function HookPage() {
  const router = useRouter()
  const { url } = router.query

  if (url) {
    const meta_content = `0; URL=${url}`
    return (
      <Head>
        {<meta http-equiv="refresh" content={meta_content} />}
      </Head>
    )
  }

  return <></>
}

export default HookPage
