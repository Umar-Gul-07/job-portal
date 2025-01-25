import Header from "./Header";

const UserList = () => {
    const users = [
        {name: "John Doe", email: "john@example.com", role: "Admin", status: "Active"},
        {name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive"},
        {name: "Samuel Jackson", email: "samuel@example.com", role: "Editor", status: "Active"},
        {name: "Linda Johnson", email: "linda@example.com", role: "User", status: "Active"},
        {name: "Chris Williams", email: "chris@example.com", role: "Admin", status: "Inactive"}
    ];

    return (
        <>
            <Header/>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">User List</h1>

                {/* User Table */}
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="min-w-full text-sm text-left text-gray-500">
                        <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.role}</td>
                                <td className={`px-6 py-4 text-${user.status === "Active" ? "green" : "red"}-500`}>
                                    {user.status}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                                    <button className="ml-4 text-red-600 hover:text-red-800">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UserList;
