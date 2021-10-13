import dynamic from "next/dynamic";
const LazyComp = dynamic(() => import("../src/lazyComp"));

function About() {
  return <LazyComp />;
}

export default About;
