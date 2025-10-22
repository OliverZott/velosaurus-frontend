import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section className="settings-section">
            <header className="settings-header">
                <h2>Settings</h2>
            </header>
            <main className="settings-content">
                {children}
            </main>
        </section>
    );
}