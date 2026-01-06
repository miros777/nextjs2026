import {getAll} from "@/services/api.services";
import IPost from "@/models/IPost";
import PostComponent from "@/components/posts/PostComponent";

const PostsComponent = async () => {
    const posts: IPost[] = await getAll<IPost[]>('/posts')
    return (
        <div>
            {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;