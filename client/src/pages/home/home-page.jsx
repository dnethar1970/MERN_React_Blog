import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/header/header.component';
import Posts from '../../components/posts/posts.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import './home.styles.css';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
    //when adding axios fetch method, need to indicate he api url by adding to the end of the package.json file i.e. "proxy":"http://localhost:5000/api"
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    //console.log(location);

    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts" + search);
            //console.log(res);
            setPosts(res.data);
        };
        fetchPosts();
    },[search]);
    //end of fetch

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}
