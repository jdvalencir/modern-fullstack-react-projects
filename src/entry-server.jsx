import ReactDOMServer from 'react-dom/server'
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
} from "react-router"
import { routes } from './routes.jsx'
import { createFetchRequest } from './request.jsx'
import { App } from './App.jsx'

const handler = createStaticHandler(routes)

export async function render(req) {
    const fetchRequest = createFetchRequest(req)

    const context = await handler.query(fetchRequest)

    const router = createStaticRouter(handler.dataRoutes, context)

    return ReactDOMServer.renderToString(
        <App>
            <StaticRouterProvider router={router} context={context} />
        </App>,
    )
}