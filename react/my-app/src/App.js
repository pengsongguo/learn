import React, {Suspense, lazy} from 'react';
import Loading from "./components/Loading";

const FatherAndSon = lazy(() => import('./components/FatherAndSon/index'));

function App() {

    return (
        <div className="App">
            <Suspense fallback={<Loading/>}>
                <FatherAndSon/>
            </Suspense>
        </div>
    );
}

export default App;
