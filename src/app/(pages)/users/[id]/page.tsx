import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type UserPageProps = {
    params: Promise<{id:string}>,
    searchParams: Promise<SearchParams>
}
const Page:FC<UserPageProps> = async ({searchParams}) => {

    const {data} = await searchParams;

    let obj = null;

    if(typeof data === "string") {
        obj = JSON.parse(data) as IUser;
        console.log(obj)
    }


    return (
        <div>
            User page
            {obj && <div>{obj.id} {obj.name}</div>}
        </div>
    );
};

export default Page;