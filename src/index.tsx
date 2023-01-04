import React from 'react';
import {createRoot} from 'react-dom/client';
import AppWrapper from "./AppWrapper";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <AppWrapper/>
);

serviceWorkerRegistration.register();