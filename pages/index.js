// import styles from "../styles/Home.module.css";
import { HomePageHero, HomePageExplore } from "components/blocks";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <div className="p-10">
        <HomePageExplore />
      </div>
    </>
  );
}
