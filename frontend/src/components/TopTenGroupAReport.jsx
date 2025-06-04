const getTop10GroupA = (students) => {
  return students
    .filter((s) => s.toan != null && s.vat_li != null && s.hoa_hoc != null)
    .map((s) => ({
      ...s,
      totalGroupAScore: s.toan + s.vat_li + s.hoa_hoc,
    }))
    .sort((a, b) => b.totalGroupAScore - a.totalGroupAScore)
    .slice(0, 10);
};

const Top10GroupA = ({ students }) => {
  const top10 = getTop10GroupA(students);

  return (
    <div className="p-4 bg-white rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-4">Top 10 Group A Students</h2>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">#</th>
            <th className="border px-2 py-1">SBD</th>
            <th className="border px-2 py-1">Toán</th>
            <th className="border px-2 py-1">Vật Lý</th>
            <th className="border px-2 py-1">Hóa Học</th>
            <th className="border px-2 py-1">Tổng điểm</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((s, index) => (
            <tr key={s.sbd}>
              <td className="border px-2 py-1 text-center">{index + 1}</td>
              <td className="border px-2 py-1 text-center">{s.sbd}</td>
              <td className="border px-2 py-1 text-center">{s.toan}</td>
              <td className="border px-2 py-1 text-center">{s.vat_li}</td>
              <td className="border px-2 py-1 text-center">{s.hoa_hoc}</td>
              <td className="border px-2 py-1 text-center">
                {s.totalGroupAScore.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top10GroupA;
