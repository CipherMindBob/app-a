import Link from "next/link"

export default function BlogHome() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blog</h1>
      <p className="mb-4">This is the blog home page in the blog app.</p>
      <div className="space-x-4">
        <Link href="/blog/post-1" className="text-blue-500 hover:underline">
          Post 1
        </Link>
        <Link href="/blog/post-2" className="text-blue-500 hover:underline">
          Post 2
        </Link>
        <a href="/" className="text-blue-500 hover:underline">
          Back to Main App
        </a>
      </div>
    </div>
  )
}

