import PostCard from "@/components/Posts/PostCard";
import { IPost } from "@/types";

const PostsPage = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", 
    {
      // cache: "force-cache"

      // next: {
      //   revalidate: 30
      // }

      cache: "no-store"
    }
  );
  const posts = await res.json();
  console.log(posts)
  return (
    <div>
      <h1 className="text-xl text-center font-semibold my-5">All Posts</h1>
      <div className="w-9/10 mx-auto grid grid-cols-3 gap-5">
        {
          posts?.map((post: IPost) => (
            <PostCard key={post?.id} post={post}/>
          ))
        }
      </div>
    </div>
  );
};

export default PostsPage;