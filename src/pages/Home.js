import { useEffect, useContext,useState} from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";
import { SideMenu } from "../components/SideMenu";
import { postRepository } from "../repositories/post";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import { authRepository } from "../repositories/auth";
const limit=5;
function Home() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const { currentUser,setCurrentUser} = useContext(SessionContext);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchPosts();
  }, []);
  const createPost = async () => {
    const post = await postRepository.create(content, currentUser.id);
    setPosts([{...post,userId:currentUser.id,userName:currentUser.userName},...posts]);
    setContent("");
  };

  const fetchPosts = async (page) => {
    const posts = await postRepository.find(page,limit);
    setPosts(posts);
  };
  const moveToNext = async () => {
    const nextPage = page + 1;
    await fetchPosts(nextPage);
    setPage(nextPage);
  };
  const moveToPrev = async () => {
    const prevPage = page - 1;
    await fetchPosts(prevPage);
    setPage(prevPage);
  };
  const deletePost = async (postId) => {
    await postRepository.delete(postId);
    setPosts(posts.filter((post) => post.id !== postId));
    //postIdに一致する投稿を削除し、残りの投稿を返す
  };
  const signout = async () => {
    await authRepository.signout();
    setCurrentUser(null);
  };
  if (currentUser == null) return <Navigate to="/signin" />;
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-slate-500 to-slate-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">BOTTI SNS APP</h1>
          <button onClick={signout} className="text-white hover:text-red-600">ログアウト</button>
        </div>
      </header>
      <div className="container mx-auto mt-6 p-4">
        <div className="md:grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
                className="w-full p-2 mb-4 border-2 border-gray-200 rounded-md"
                placeholder="What's on your mind?"
              />
              <button 
              onClick={createPost}
              disabled={content === ''}
              className="bg-[#708ce0] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Post
                
              </button>
            </div>
            <div className="mt-4">
              {posts.map((post) => (
                <Post key={post.id} post={post} onDelete={deletePost}/>
              ))}
            </div>
            <Pagination onPrev={page> 1 ? moveToPrev: null} onNext={posts.length >= limit ? moveToNext:null}/>
          </div>
          <div className="mt-4 md:mt-0"> 
          <SideMenu/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;