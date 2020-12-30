import { useRouter } from 'next/router';
import useSWR from 'swr';

const One = () => {

  const { query } = useRouter();
  const { data, error } = useSWR(`/api/people/${query.id}`,
    (url) => fetch(url).then(res => res.json()))

  console.log('data', data);

  if(!data) return <div>Loading....</div>
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  )
}

// export async function getStaticProps() {
//   const { query } = useRouter();

//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`https://localhost:3000/api/people/${query.id}`)
//   const data = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default One