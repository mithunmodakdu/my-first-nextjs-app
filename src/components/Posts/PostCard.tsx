import { IPost } from "@/types";

const PostCard = ({post} : {post: IPost}) => {
  return (
    <div className="bg-green-300 p-5 rounded-2xl">
      <h2 className="text-xl font-semibold">{post?.title}</h2>
      <p>{post?.body}</p>     
    </div>
  );
};

export default PostCard;