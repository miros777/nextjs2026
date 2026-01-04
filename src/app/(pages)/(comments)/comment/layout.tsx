import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommentLayout metadata'
}
type Props = { children: React.ReactNode }
const CommentLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            Comment Layout
            {children}
            <hr/>
        </div>
    );
};

export default CommentLayout;