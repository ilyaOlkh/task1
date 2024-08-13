import { IPost } from "../interfaces/interfaces"


interface postCartProps {
    post: IPost
}

const PostCart = ({ post }: postCartProps) => {
    return (
        <a href={`./posts/${post.id}`} className="max-w-full flex gap-5 flex-col border border-gray rounded-custom shadow-custom p-4">
            <h2 className="text-2xl">{post.title}</h2>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full">{post.body}</div>
        </a>
    )
}

export default PostCart