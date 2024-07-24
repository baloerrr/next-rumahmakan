import NavDashboard from "@/components/NavDashboard";
import { auth } from '@clerk/nextjs/server'


const DashboardLayout = ({ children }) => {
  auth().protect()
  return (
    <>
      <NavDashboard />
      {children}
    </>

  );
}

export default DashboardLayout;
