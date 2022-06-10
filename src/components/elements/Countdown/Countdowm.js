import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Countdown() {
  const [seconds, setSeconds] = useState(10);

  const router = useRouter();

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("Times Up");
      router.push("/feedback");
    }
    // !Du ya nahi???
  }, [router, seconds]);

  return <div>{seconds}</div>;
}

export default Countdown;
