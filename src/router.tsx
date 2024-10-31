import { createBrowserRouter } from "react-router-dom";
import GeneralError from "./pages/errors/general-error";
import NotFoundError from "./pages/errors/not-found-error";
import MaintenanceError from "./pages/errors/maintenace-error";

const router = createBrowserRouter([
    // Auth routes
    {
        path: '/sign-up',
        lazy: async () => ({
            Component: (await import('./pages/auth/sign-up')).default,
        }),
    },
    {
        path: '/sign-in',
        lazy: async () => ({
            Component: (await import('./pages/auth/sign-in')).default,
        }),
    },
    {
        path: '/',
        lazy: async () => {
            const AppSHell = await import('./components/app-shell');
            return { Component: AppSHell.default };
        },
        errorElement: <GeneralError />,
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import('./pages/dashboard')).default
                })
            },
            {
                path: 'partners',
                lazy: async () => ({
                    Component: (await import('./pages/partners')).default
                })
            },
            {
                path: 'users',
                lazy: async () => ({
                    Component: (await import('./pages/users')).default
                })
            },
            {
                path: 'profile',
                lazy: async () => ({
                    Component: (await import('./pages/profile')).default
                })
            }
        ]
    },
    // Error routes 
    {
        path: "/error/500",
        element: <GeneralError minimal={true} />
    },
    {
        path: "/error/404",
        element: <NotFoundError />
    },
    {
        path: "/error/503",
        element: <MaintenanceError />
    },
    // Fallback 404 route
    {
        path: "*",
        element: <NotFoundError />
    }
]);

export default router;