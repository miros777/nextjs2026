import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import {SearchParams} from "next/dist/server/request/search-params";
import IPost from "@/models/IPost";


type PostPageProps = {
    params: Promise<{id:string}>,
    searchParams: Promise<SearchParams>
}
const Page:FC<PostPageProps> = async ({searchParams}) => {

    const {data} = await searchParams;

    let obj = null;

    if(typeof data === "string") {
        obj = JSON.parse(data) as IPost;
        console.log(obj)
    }

    return (
        <div>
            Post Page

            {obj && <div>
                <div>ID: {obj.id}</div>
                <div>{obj.title}</div>
                <div>{obj.body}</div>
            </div>}
        </div>
    );
};

export default Page;