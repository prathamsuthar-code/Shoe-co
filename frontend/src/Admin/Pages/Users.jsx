import { useEffect, useState } from "react"

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const res = await fetch("http://localhost:8000/api/user")
        const data = await res.json()

        setUsers(data)

      } catch (error) {
        console.log(error)
      }

    }

    fetchUsers()

  }, [])

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Users List
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-200 rounded-lg">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">User ID</th>
              <th className="p-3 text-left">Joined Date</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user._id} className="border-t">

                <td className="p-3">
                  {user.firstName} {user.lastName}
                </td>

                <td className="p-3">
                  {user.email}
                </td>

                <td className="p-3 text-sm text-gray-500">
                  {user._id}
                </td>

                <td className="p-3">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Users