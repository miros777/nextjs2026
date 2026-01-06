import React from 'react';
import {IUser} from "@/models/IUser";
import Link from "next/link";

type UserComponentProps = {
    user: IUser;
    // searchParams: IUser
}
const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            <div>{user.id}
                <Link href={{pathname: '/users/' + user.id.toString(), query:{data: JSON.stringify(user)} }} >{user.name}</Link>
            </div>
        </div>
    );
};

export default UserComponent;