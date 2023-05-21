import Image from 'next/image';
import Link from 'next/link';


export async function generateMetadata({params: { id }}) {
    const user = getData(id)

    return {
        title: `${user[0]}|${user[1]}`
    }
}

async function getData(id) {
    const response = await fetch(`http://127.0.0.1:8000/users/${id}`)

    return response.json()
}

export default async function User({params: {id}}) {
    let user = await getData(id)

    return <>
        <Link href={'/users'}>Back</Link>
        <img src={`data:image;base64,${user[3]}`} 
        width={16}
        height={16}/>
        <h1>User: {user[1]}</h1>
        <p>Email: {user[2]}</p>
    </>
}