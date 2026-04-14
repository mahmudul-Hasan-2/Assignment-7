import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { HandlingContext } from "../../Context/Context";

const DashboardPage = () => {
  const { calls, texts, videos } = useContext(HandlingContext);

  const data = [
    { name: "Texts", value: texts.length, fill: "#7E35E1" },
    { name: "Calls", value: calls.length, fill: "#244D3F" },
    { name: "Videos", value: videos.length, fill: "#37A163" },
  ];

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Friendship Analytics
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default DashboardPage;
