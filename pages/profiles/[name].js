import { useRouter } from "next/router"
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
const LazyProfile = dynamic(() => import("../../src/lazyProfile"));
export default function DynamicPage() {
  const router = useRouter()
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  const {
    query: { name },
  } = router
  console.log('gooing to test git action');
  return (
    <>
      <div style={{ minHeight: '1000px' }}>You're referring {name}'s profile</div>
      <div ref={observe}>
        {inView && <LazyProfile profile={name} />}
      </div>
    </>
  )
}