import { useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { toast } from "react-toastify";
import ScoreTable from "../components/ScoreTable";

const SearchScorePage = () => {
  const [userId, setUserId] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [userScore, setUserScore] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registration Number Submitted:", userId);
    setIsWaiting(true);
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/scores`,
      { params: { sbd: userId } }
    );
    if (res.data.success == true) {
      console.log("User Score Data:", res.data.data);
      setUserScore(res.data.data);
    } else {
      console.error("Error fetching user score:", res.data.message);
      toast.error(res.data.message);
    }
    setIsWaiting(false);
    setUserId("");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-6">
      {/* User Registration Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">User Registration</h2>
        <div className="flex gap-2">
          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <label className="block text-black font-medium mb-1">
              Registration Number
            </label>
            <div className="flex w-full gap-2">
              <Input
                placeholder="Enter registration number"
                value={userId}
                onChangeValue={setUserId}
                required
              />
              {isWaiting ? (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                  disabled
                >
                  Waiting...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Detailed Scores Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
        {userScore && Object.keys(userScore).length > 0 && (
          <ScoreTable score={userScore} />
        )}
      </div>
    </div>
  );
};

export default SearchScorePage;
