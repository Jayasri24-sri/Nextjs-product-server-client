'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-blue-700 text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between">
                <Link href="/" className="text-xl font-bold">Products</Link>
                <div className="space-x-4">
                    <Link href="/users" className="hover:underline">Users</Link>
                    <Link href="/list" className="hover:underline">List</Link>

                </div>

            </div>
        </nav>
    );
}
