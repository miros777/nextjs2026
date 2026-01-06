import React from 'react';
import CommentsComponent from "@/components/comments/CommentsComponent";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'My Comments Page',
    description: 'My Comments Page Description',
}

const Page = () => {
    return (
        <div>
            Comments Page
            <CommentsComponent/>
        </div>
    );
};

export default Page;