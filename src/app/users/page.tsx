import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// This is a Server Component (default in Next.js App Router)

async function UsersPage() {

    // Fetch users from an API (server-side)

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await res.json();

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">User List</h1>
            <ul className="space-y-3">

                {users.map((user: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; email: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                    <li key={user.id} className="p-4 border rounded-lg bg-gray-100">
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </li>

                ))}
            </ul>
        </main>

    );

}

export default UsersPage; // No JS sent to client, only pre-rendered HTML!

 