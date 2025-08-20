import {getPosts} from "../../../api/posts";



export default async function PostsComp() {
    const post = await getPosts();
    return (
            <main>
                <div>{JSON.stringify(post)}</div>
            </main>
    )
}