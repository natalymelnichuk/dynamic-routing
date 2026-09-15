

import { Link } from 'react-router-dom';
import { posts } from "../lib/posts";


export default function BlogIndex() {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="border p-4 rounded-lg shadow-sm">
                        <Link to={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">{post.title.toUpperCase()}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
