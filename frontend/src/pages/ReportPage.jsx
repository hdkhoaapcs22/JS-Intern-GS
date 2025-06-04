import React, { useEffect, useState } from "react";
import axios from "axios";
import { OrbitProgress } from "react-loading-indicators";
import subjectLabels from "../utils/KeyMapSubject";
import ScoreChartGrid from "../components/ScoreChartGrid";
import Top10GroupA from "../components/TopTenGroupAReport";

const ReportPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/general/scores`
        );
        if (response.data.success !== true) {
          throw new Error(response.data.message || "Failed to fetch scores");
        }
        setStudents(response.data.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading === true) {
    return (
      <div className="z-50 flex items-center justify-center h-screen">
        <OrbitProgress color="#314ccc" size="medium" />
      </div>
    );
  }

  // Gom điểm từng môn
  const subjectScores = {};
  for (let key in subjectLabels) {
    if (key === "ma_ngoai_ngu" || key === "sbd") continue;
    subjectScores[key] = students
      .map((student) => student[key])
      .filter((score) => score !== null && score !== undefined);
  }

  console.log("Subject Scores:", subjectScores["toan"]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
      <ScoreChartGrid subjectScores={subjectScores} />
      <Top10GroupA students={students} />
    </div>
  );
};

export default ReportPage;
