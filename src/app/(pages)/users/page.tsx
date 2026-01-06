import React from 'react';
import UsersComponent from "@/components/users/UsersComponent";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'My Users Page',
    description: 'My Users Page Description',
}

const Page = () => {

    return (
        <div>
            Users Page
            <UsersComponent/>
        </div>
    );
};

export default Page;