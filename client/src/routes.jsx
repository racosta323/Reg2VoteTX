import App from "./App"
import Modal from "./Modal"
import Success from "./Success"

import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/confirmation",
        element: <Modal/>
    },
    {
        path: '/success',
        element: < Success />
    }
]


export const router = createBrowserRouter(routes)