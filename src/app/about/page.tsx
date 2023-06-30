import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Hello, About!</h1>
      <Link href='/'>
        <h3>Go to Home!</h3>
      </Link>
      <Link href='/blog'>
        <h3>Go to Blog!</h3>
      </Link>
    </div>
  )
}
