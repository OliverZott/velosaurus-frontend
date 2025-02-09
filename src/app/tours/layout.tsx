import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <h1>Tour Dashboard</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;