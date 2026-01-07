import React from 'react';

type Props = { children: React.ReactNode }
const CarsLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            Cars layout
            {children}
            <hr/>
        </div>
    );
};

export default CarsLayout;