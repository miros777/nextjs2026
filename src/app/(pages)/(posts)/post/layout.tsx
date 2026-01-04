import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostLayout metadata'
}
type Props = { children: React.ReactNode }
const PostLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            Post Layout
            {children}
            <hr/>
        </div>
    );
};

export default PostLayout;