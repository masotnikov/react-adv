import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@/shared/config/routeConfig/routeConfig";

export const AppRouter = () => {

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {routeConfig.map((({element, path}) =>
            <Route key={path}
                   path={path}
                   element={element}/>
        ))}
      </Routes>
    </Suspense>
  );
};

