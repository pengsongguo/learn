import React, {Suspense, lazy} from 'react';
import Loading from "./components/Loading";
// const FatherAndSon = lazy(() => import('./components/FatherAndSon/index'));
import GrandFather from "./components/GrandFather/GrandFather";

function App() {

    return (
        <div className="App">
            <GrandFather/>
        </div>
    );
}

export default App;
