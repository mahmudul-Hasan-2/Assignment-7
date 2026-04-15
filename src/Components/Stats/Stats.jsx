import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { HandlingContext } from "../../Context/Context";

const DashboardPage = () => {
  const { timeLine } = useContext(HandlingContext);
  const texts = timeLine.filter(t => t.type === 'text')
  const calls = timeLine.filter(t => t.type === 'call')
  const videos = timeLine.filter(t => t.type === 'video')

  const data = [
    { name: "Text", value: texts.length, fill: "#7E35E1" },
    { name: "Call", value: calls.length, fill: "#244D3F" },
  { name: "Video", value: videos.length, fill: "#37A163" },
  ];

  return (
    <div className="container mx-auto  my-20 space-y-6 px-2">
      <h2 className="text-2xl sm:text-5xl font-bold">Friendship Analytics</h2>
      <div className=" shadow p-10 rounded-md space-y-6 border border-slate-300">
        <h2 className="font-semibold text-[20px ] mb-16 text-start">
          By Interaction Type
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
    </div>
  );
};

export default DashboardPage;
