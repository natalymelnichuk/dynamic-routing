
import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

export const PostPage = () => {
    const { slug } = useParams();

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
        <div className="max-w-2xl mx-auto p-4 text-red-500">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Post not found</h2>
        </div>
        );
    }

    return (
        <article className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{post.title}</h1>
            <div className="prose text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
            </div>
        </article>
    )
};



