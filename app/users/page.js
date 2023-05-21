import Link from "next/link"

async function getData() {
    const response = await fetch('http://127.0.0.1:8000/users')
    return response.json()
}

export const metadata = {
    title: "Users | App"
}

export default async function Users() {
    let users = await getData()
    

    return <>
        <h1 className="mx-auto">Users page</h1>
        <ul>
            {users.map(user => (
                 <Link href={`/users/${user[0]}`}>{user[1]}<br/></Link>
            ))}
        </ul>
    </>
  }
  