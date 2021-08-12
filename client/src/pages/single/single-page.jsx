import Sidebar from '../../components/sidebar/sidebar.component';
import SinglePost from '../../components/single-post/single-post.component';
import './single.styles.css';

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
