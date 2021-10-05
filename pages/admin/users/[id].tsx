import Master from "../../frontend/components/master"
import Head from "next/dist/shared/lib/head"

export default function AdminUserDetail () {
    return (
        <Master>
            <Head>
                <title>User Detail</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"></link>
            </Head>
            <h1>Page Detail User</h1>
            <h2>Admin -{">"} User -{">"} [id]</h2>
        </Master>
    )
}