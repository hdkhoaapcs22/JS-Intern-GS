import ScorePieChart from "./ScorePieChart";
import subjectLabels from "../utils/KeyMapSubject";

const levelLabels = [
  { color: "#4CAF50", label: ">=8" },
  { color: "#FFC107", label: "6-7.99" },
  { color: "#FF9800", label: "4-5.99" },
  { color: "#F44336", label: "<4" },
];

const ScoreChartGrid = ({ subjectScores }) => {
  return (
    <div className="p-5">
      {/* Legend Header */}
      <div className="flex flex-wrap justify-end items-center gap-4 mb-6">
        {levelLabels.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-sm">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Pie Chart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {Object.entries(subjectLabels).map(([key, label]) => {
          if (key === "ma_ngoai_ngu" || key === "sbd") return null;
          return (
            <ScorePieChart
              key={key}
              subject={label}
              data={subjectScores[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScoreChartGrid;
