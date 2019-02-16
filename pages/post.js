import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const busca = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await busca.json();

  console.log(`shows encontrados: ${show.name}`);

  return { show }
}

export default Post;
