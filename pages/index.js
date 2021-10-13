import Router from "next/router";
function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div>Welcome to Next.js!</div>
      <button type="button" onClick={() => Router.push("/about")}>
        ClickMe!
      </button>
    </div>
  );
}

export default HomePage;
