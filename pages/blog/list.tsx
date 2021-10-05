import Master from "../frontend/components/master";
import Link from "next/link";

const PostLink = (props) => (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )

export default () => {
    return (
        <Master>
            <h1>My Blog</h1>
            <PostLink title="blog 1"></PostLink>
            <PostLink title="blog 2"></PostLink>
            <PostLink title="blog 3"></PostLink>
        </Master>
    )
}