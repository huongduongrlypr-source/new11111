import { createBrowserRouter } from "react-router-dom"; // ✅ ĐÃ SỬA
import { lazy, Suspense } from "react";

export const PATHS = {
  INDEX: "/",
  HOME: "/home",
  VERIFY: "/verify",
  SEND_INFO: "/send-info",
  TIMEACTIVE: "/business-team",
};

const Home = lazy(() => import("@/pages/home"));
const Verify = lazy(() => import("@/pages/verify"));
const SendInfo = lazy(() => import("@/pages/send-info"));
const NotFound = lazy(() => import("@/pages/not-found"));

const withSuspense = (Component) => (
  <Suspense fallback={<div></div>}>{Component}</Suspense>
);

const router = createBrowserRouter([
  {
    path: PATHS.INDEX,
    element: withSuspense(<Home />)
  },
  {
    path: PATHS.HOME,
    element: withSuspense(<Home />)
  },
  {
    path: PATHS.VERIFY,
    element: withSuspense(<Verify />)
  },
  {
    path: PATHS.SEND_INFO,
    element: withSuspense(<SendInfo />)
  },
  {
    path: ${PATHS.TIMEACTIVE}/*,
    element: withSuspense(<Home />)
  },
  {
    path: "*",
    element: withSuspense(<NotFound />)
  }
], {
  basename: "/"
});

export default router;
