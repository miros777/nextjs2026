import {FC} from "react";
import IComment from "@/models/IComment";
import Link from "next/link";


type CommentProps = {
    comment: IComment;
}
const CommentComponent:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <div><Link href={{pathname: '/comments/' + comment.id.toString(), query:{data: JSON.stringify(comment)} }}>Comment ID: {comment.id}</Link></div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentComponent;