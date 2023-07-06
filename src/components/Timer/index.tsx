import React, { JSX } from "react";
import styles from "./Timer.module.css";

type TimerProps = {
    title: string;
}

const Timer: React.FC<TimerProps> = ({ title }): JSX.Element => {
    return (
        <h1>{title}</h1>
    );
}

export default Timer;
