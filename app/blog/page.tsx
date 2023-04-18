import Link from "next/link"

export default function Page() {  
  return (
    <div>
      <h1>Hello, Blog!</h1>
      <Link href="/">
        <h3>Go to Home!</h3>
      </Link>
      <Link href="/about">
        <h3>Go to About!</h3>
      </Link>
      <Link href="/blog/1234">
        <h3>Go to Item! 1234</h3>
      </Link>
      <Link href="/blog/55555">
        <h3>Go to Item! 55555</h3>
      </Link>
    </div>
  )
}