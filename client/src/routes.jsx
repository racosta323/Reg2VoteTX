import App from "./App"
import Success from "./Success"

import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: '/success',
        element: < Success />
    }
]


export const router = createBrowserRouter(routes)