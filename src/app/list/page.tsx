"use client";

import { useEffect, useState } from "react";

interface User {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        medium: string;
    };
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://randomuser.me/api/?results=10");
                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await res.json();
                setUsers(data.results); // Assuming the data is in the "results" field
            } catch (error) {
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4"> List</h1>
            <ul className="space-y-3">
                {users.map((user, index) => (
                    <li key={index} className="p-4 border rounded-lg bg-gray-100">
                        <img
                            src={user.picture.medium}
                            alt={user.name.first}
                            className="w-16 h-16 rounded-full"
                        />
                        <h2 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
