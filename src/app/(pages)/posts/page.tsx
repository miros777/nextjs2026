import React from 'react';
import PostsComponent from "@/components/posts/PostsComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'My Posts Page',
    description: 'My Posts Page Description',
}

const Page = () => {
    return (
        <div>
            Posts Page
            <PostsComponent/>
        </div>
    );
};

export default Page;