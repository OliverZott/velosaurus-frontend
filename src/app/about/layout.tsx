import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section className="container py-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            href="/about"
                            className="nav-link"
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="/about/team"
                            className="nav-link"
                        >
                            Our Team
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="mt-4">
                {children}
            </main>
        </section>
    );
}