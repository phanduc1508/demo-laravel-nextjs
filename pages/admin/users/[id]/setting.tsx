import Master from "../../../frontend/components/master"
import Head from "next/dist/shared/lib/head"

export default function SettingUser () {
    return (
        <Master>
            <Head>
                <title>Setting User</title>
              </Head>
            <>
            <h1>Page Setting User</h1>
            <h2>Admin -{">"} User -{">"} [id] -{">"} setting</h2>
            </>
        </Master>
    )
}