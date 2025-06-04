import { useState } from "react";
import Input from "../components/Input";

const SearchScorePage = () => {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Registration Number Submitted:", userId);
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
                label="Registration Number"
                placeholder="Enter registration number"
                value={userId}
                onChangeValue={setUserId}
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Detailed Scores Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
        <p className="text-gray-600">Detailed view of search scores here!</p>
      </div>
    </div>
  );
};

export default SearchScorePage;
