// src/pages/ApiData.jsx
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  if (loading)
    return <p className="text-center text-gray-500">Loading posts...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <Card>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h4 className="font-semibold text-blue-600 dark:text-blue-400">
              {post.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="font-semibold">{page}</span>
        <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </Card>
  );
}
