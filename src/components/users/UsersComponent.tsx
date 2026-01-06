import React from 'react';
import {IUser} from "@/models/IUser";
import {getAll} from "@/services/api.services";
import UserComponent from "@/components/users/UserComponent";

const UsersComponent = async () => {

    const users = await getAll<IUser[]>('/users');
    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;