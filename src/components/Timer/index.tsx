import React, { JSX } from "react";
import styles from "./Timer.module.css";

type TimerProps = {
    title: string;
}

const testTitles: string[] = [
    "Why do I need to learn this?",
    "What is the meaning of life?",
    "Interviews are hard.",
    "I hate it.",
];

const Timer: React.FC<TimerProps> = ({ title }): JSX.Element => {
    const [elapsedTime, setElapsedTime] = React.useState<number>(0);
    let interval: number;

    const resetTimer = (): void => {
        setElapsedTime(0);
    }

    const stopTimer = (): void => {
        clearInterval(interval);
    }

    React.useEffect(() => {
        interval = setInterval(() => {
            if (elapsedTime < testTitles.length) {
                setElapsedTime((elapsedTime) => elapsedTime + 1);
            } else {
                setElapsedTime(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [elapsedTime]);

    return (
        <div className={styles.container}>
            <h2>{elapsedTime === 0 ? title : elapsedTime <= testTitles.length && testTitles[elapsedTime - 1]}</h2>
            <p>{elapsedTime}</p>
            <div className={styles["button-container"]}>
                <button onClick={resetTimer}>Reset</button>
                <button onClick={stopTimer}>Stop</button>
            </div>
        </div>
    );
}

export default Timer;
