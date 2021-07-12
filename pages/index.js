import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.replaceState(null, null, "https://google.com/new/url");
  }, []);
  return <></>;
}
