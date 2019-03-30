import App from "../App";
import Vision from "../components/Vision20/Vision20";
import Donation from "../components/Donation/";
import About from "../components/About/About";

var indexRoutes = [
  { path: "/vision", name: "Vision", component: Vision },
  { path: "/donation", name: "Donation", component: Donation },
  { path: "/about", name: "About", component: About },
  { path: "/", name: "Components", component: App }
];

export default indexRoutes;
