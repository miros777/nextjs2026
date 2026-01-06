import {getAll} from "@/services/api.services";
import IComment from "@/models/IComment";
import CommentComponent from "@/components/comments/CommentComponent";

const CommentsComponent = async () => {

    const comments = await getAll<IComment[]>('/comments');
    return (
        <div>
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;