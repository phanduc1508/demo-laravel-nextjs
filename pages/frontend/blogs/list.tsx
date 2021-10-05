
import Master from "../components/master";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const BlogList = (props) => (
    <Master>
        <h1>Batman TV Shows</h1>
        <ul>
            { props.shows.map(({show}) => (
                <li key={show.id}>   
                    <Link as={`/frontend/blog/${show.id}`} href={`/frontend/blogs/create?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Master>
)

BlogList.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    return {
        shows: data
    }
}

export default BlogList
