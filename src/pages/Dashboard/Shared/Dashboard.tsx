import { useAppSelector } from "@/redux/hook";
import BookingStatus from "../User/Home/BookingStatus";
import WelcomeBanner from "./WelcomeBanner";
import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { FacilityChart } from "../Admin/Dashboard/FacilityChart";

const Dashboard = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="flex flex-1 flex-col gap-4 lg:gap-6">
      {user?.role === "user" && <WelcomeBanner />}
      {user?.role === "user" && <BookingStatus />}
      {user?.role === "admin" && <FacilityChart />}
    </div>
  );
};

export default Dashboard;
