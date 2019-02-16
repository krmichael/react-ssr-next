import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const App = (props) => (
  <Layout>
    <h2>Batman TV Shows</h2>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h2, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: #333;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

App.getInitialProps = async function() {
  const busca = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const resposta = await busca.json();

  console.log(`qtd de dados encontrados: ${resposta.length}`);

  return {
    shows: resposta
  }
}

export default App;
