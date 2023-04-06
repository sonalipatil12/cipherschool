import React, { Suspense } from 'react'
import BlankLayoutRoutes from '../shared/routes/BlankLayoutRoutes';
import { Routes, Route } from "react-router-dom"
const BlankRout = () => {

    return (<>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {
                    BlankLayoutRoutes.map((route, i) =>
                        <Route path={route.path} element={route.component} />
                    )
                }
            </Routes>
        </Suspense>

    </>);
}

export default BlankRout;