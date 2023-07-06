import React, { JSX } from "react";
import Timer from "./components/Timer";

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <Timer title="Timer" />
        </>
    );
}

export default App;
