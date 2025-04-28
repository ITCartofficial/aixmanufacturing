import { useMemo } from "react";

const COLORS = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-emerald-500",
  "bg-rose-500",
];

const ShowProfile = ({ user }) => {
  const randomColor = useMemo(() => {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
  }, []);

  return (
    <div
      className={`w-6 h-6 rounded-full uppercase ${randomColor} flex items-center justify-center text-[12px] font-semibold text-white cursor-pointer`}
    >
      {user?.firstName?.[0] || "U"}
      {user?.lastName?.[0] || ""}
    </div>
  );
};

export default ShowProfile;
