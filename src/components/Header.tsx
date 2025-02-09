import React from 'react';
import Link from 'next/link';
import '../app/globals.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/settings">Settings</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;