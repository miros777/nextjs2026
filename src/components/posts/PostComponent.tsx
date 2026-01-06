import {FC} from "react";
import IPost from "@/models/IPost";
import Link from "next/link";
import {queue} from "sharp";

type PropsPost = {
    post:IPost
}
const PostComponent:FC<PropsPost> = ({post}) => {
    return (
        <div>
            <div>{post.userId}</div>
            <div><Link href={{
                pathname: '/posts/' + post.id.toString(),
                query: {data: JSON.stringify(post)},
            }}>{post.title}</Link></div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostComponent;