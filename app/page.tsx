import Link from "next/link"

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Main App</h1>
      <p className="mb-4">This is the home page of our Multi-Zone Next.js application on Vercel.</p>
      <div className="space-x-4">
        <Link href="/about" className="text-blue-500 hover:underline">
          About
        </Link>
        <a href="/blog" className="text-blue-500 hover:underline">
          Blog
        </a>
      </div>
    </div>
  )
}

