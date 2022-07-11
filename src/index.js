import "./index.css";
import { createRoot } from "react-dom/client";

import Primeiro from './components/basicos/Primeiro';

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <Primeiro></Primeiro>
    </div>
);
