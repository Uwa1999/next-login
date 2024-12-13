export default async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await data.json()

  return (
    <div>
      <table border="1" style={{ width: '60%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
        {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.website}</td>
              <td>{post.company.catchPhrase}</td>
              {/* <td>{post.category}</td> */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


