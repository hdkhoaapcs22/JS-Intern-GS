import subjectLabels from "../utils/KeyMapSubject.jsx";

const ScoreTable = ({ score }) => {
  const entries = Object.entries(score);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Student Score Table</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Subject</th>
            <th className="border border-gray-400 px-2 py-1">Score</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([subject, value]) => (
            <tr key={subject}>
              <td className="border border-gray-400 px-2 py-1">
                {subjectLabels[subject] || subject}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {value !== null && value !== undefined ? value : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
