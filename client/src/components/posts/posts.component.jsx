import Post from '../post/post.component';
import './posts.styles.css';

export default function Posts({ posts }) {
    return (
      <div className="posts">
        {posts.map((p) => (
          <Post post={p}/>
        ))}
      </div>
    );
  }
