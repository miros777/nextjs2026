import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/cars'}>Cars API owu</Link></li>
                <li><Link href={'/cars/addcar'}>Add Car to SQLite DB</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;