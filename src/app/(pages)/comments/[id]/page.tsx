import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import IComment from "@/models/IComment";

type CommentPageProps={
    params: Promise<{id:string}>,
    searchParams: Promise<SearchParams>
}
const Page:FC<CommentPageProps> = async ({searchParams, params}) => {

    const {data} = await searchParams;

    const dataCurrentID = await params;
    const currentID = dataCurrentID.id;
    console.log(currentID)

    let obj = null;

    if(typeof data === "string") {
        obj = JSON.parse(data) as IComment;
        console.log(obj)
    }

    return (
        <div>
            Comment Page

            {obj && <div>
                <div>ID: {obj.id}</div>
                <div>{obj.email}</div>
                <div>{obj.body}</div>
            </div>}
        </div>
    );
};

export default Page;