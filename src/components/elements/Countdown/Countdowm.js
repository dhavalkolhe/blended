import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./Countdown.module.css";

function Countdown() {
  const [seconds, setSeconds] = useState(10);

  const router = useRouter();

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("");
      router.push("/feedback");
    }
  }, [router, seconds]);

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Redirecting to Feedback Form in</h1>
      <div>
        <ul>
          <li className={styles.item}>
            <span>00</span>days
          </li>
          <li className={styles.item}>
            <span>00</span>Hours
          </li>
          <li className={styles.item}>
            <span>00</span>Minutes
          </li>
          <li className={styles.item}>
            <span>{seconds.toString().padStart(2, 0)}</span>Seconds
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Countdown;
