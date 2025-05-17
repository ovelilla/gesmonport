// Vendors
import { redirect } from "next/navigation";

const Home = async () => {
  return redirect("/signin");
};

export default Home;
