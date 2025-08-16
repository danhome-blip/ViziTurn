export default function PostCard({ post }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow border border-gray-100 hover:shadow-md transition">
      <div className="flex gap-4">
        {post.image_url ? (
          <div className="flex-shrink-0 w-28 h-20">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-28 h-20 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">Fără imagine</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">#{post.category}</p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs font-medium hover:underline mt-2 inline-block"
          >
            Vezi detalii →
          </a>
        </div>
      </div>
    </div>
  );
}
