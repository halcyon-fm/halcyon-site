/*
 *  filename: src/index.js
 *  description: -
 **/

/** External imports **/
import React from 'react';
import { 
    createRoot,
} from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

/** Project imports - JS **/
import Error from 'Components/Error';
import Layout from 'Components/Layout';

import Home from './Home';
import Releases from './Releases';

/** Project imports - CSS **/
import 'CSS/global.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/releases' element={<Releases />} />
                    <Route path='/contact' element={<Home />} />
                    <Route element={<Error />} />
                </Route>
            </Routes> 
        </BrowserRouter>
    </React.StrictMode>
);
