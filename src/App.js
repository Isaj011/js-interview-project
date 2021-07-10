import axios from 'axios';
import   React , {useState, useEffect} from 'react'
import './App.css';
import { Pagination } from './components/Pagination';
import { Post } from './components/Post';

const App=()=> {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] =useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage] =useState(9);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true);
      const res = await axios.get('https://ti-react-test.herokuapp.com/users');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[]);

  

  //Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost -postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(posts)
  
  //change page
  const paginate = pageNumber=> setCurrentPage(pageNumber);
  
  return (
    <div className="App">
      <Post posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}  paginate ={paginate} />
    </div>
  );
}

export default App;
  
