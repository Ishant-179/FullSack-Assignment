import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Registered Users
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users registered yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-xl rounded-xl p-6 flex flex-col items-center"
            >
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-sm"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xl font-bold">
                  {user.name?.[0] || "U"}
                </div>
              )}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
