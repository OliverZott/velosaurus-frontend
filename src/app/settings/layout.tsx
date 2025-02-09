import React from 'react';

import { ReactNode } from 'react';

const SettingsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <h2>Settings</h2>
            {children}
        </div>
    );
};

export default SettingsLayout;