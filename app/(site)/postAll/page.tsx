import {getPosts} from "../../../api/posts";

const post = await getPosts();

export default async function Posts() {
    return (

        <>
            <main>
                <div>{JSON.stringify(post)}</div>
            </main>
        </>
    )
}