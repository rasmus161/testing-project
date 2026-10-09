import { LogoLink } from "../components/ui/header/header";
import { useRouteError } from "react-router-dom";

export function NotFound() {
  type erroorObj = {
    status: number;
    statusText: string;
    data: string;
  };
  const error = useRouteError() as erroorObj;
  console.error(error);
  return (
    <div className="not-found-container flex min-h-screen flex-col items-center justify-center font-sans">
      <LogoLink link={"/"} logoSrc={"./vite.svg"} className="" size={80} />
      <h2 className="text-4xl">{error.status}</h2>
      <h2 className="p-5 text-4xl">{error.statusText}</h2>
      <p className="text-gray-600">
        <i>{error.data}</i>
      </p>
    </div>
  );
}
