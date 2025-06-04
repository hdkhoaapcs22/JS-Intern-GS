import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#4CAF50", "#FFC107", "#FF9800", "#F44336"];

const classifyScore = (score) => {
  if (score >= 8) return ">=8";
  if (score >= 6) return "6-7.99";
  if (score >= 4) return "4-5.99";
  if (score < 4) return "<4";
  return "N/A";
};

const ScorePieChart = ({ subject, data }) => {
  const processed = {
    ">=8": 0,
    "6-7.99": 0,
    "4-5.99": 0,
    "<4": 0,
  };

  for (let score of data) {
    if (score === "N/A" || score === null || score === undefined) continue;
    const level = classifyScore(parseFloat(score));
    if (processed[level] !== undefined) {
      processed[level]++;
    }
  }

  const chartData = Object.entries(processed).map(([key, value]) => ({
    name: key,
    value,
  }));

  return (
    <div style={{ width: "250px", textAlign: "center" }}>
      <h4>{subject}</h4>
      <PieChart width={250} height={250}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={false}
          dataKey="value"
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value} học sinh`, name]} />
      </PieChart>
    </div>
  );
};

export default ScorePieChart;
