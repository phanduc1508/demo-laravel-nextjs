import { withRouter } from 'next/router'
import Master from '../components/master'
import fetch from 'isomorphic-unfetch'


const PostDetail =  (props) => (
  <Master>
     <h1>{props.show.name}</h1>
     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
     <img src={props.show.image.medium}/>
  </Master>
)

PostDetail.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default PostDetail
