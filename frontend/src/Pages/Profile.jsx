import { useEffect, useState } from "react"

const Profile = () => {

  const [user, setUser] = useState({})

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (storedUser) {
      setUser(storedUser)
    }

  }, [])

  return (
    <div className="p-10 flex justify-center">

      <div className="w-[500px] bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-2xl font-bold mb-6">
          My Profile
        </h1>

        <div className="space-y-4">

          <div>
            <label className="text-gray-600">First Name</label>
            <input
              type="text"
              value={user.firstName || ""}
              readOnly
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-gray-600">Last Name</label>
            <input
              type="text"
              value={user.lastName || ""}
              readOnly
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-gray-600">Email</label>
            <input
              type="text"
              value={user.email || ""}
              readOnly
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          

        </div>

      </div>

    </div>
  )
}

export default Profile