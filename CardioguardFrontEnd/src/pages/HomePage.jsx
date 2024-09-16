import BarGraph from "../components/BarGraph";
import IndexPage from "../components/IndexPageSlider";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <IndexPage />
      <BarGraph />
    </div>
  );
}
