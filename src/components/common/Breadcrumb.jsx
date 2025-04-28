import { BiHome } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";


const Breadcrumb = ({ labelMap = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500">
      <Link to="/" className="flex items-center hover:text-gray-700">
        <BiHome className="w-4 h-4 mr-1" />
      </Link>

      {pathnames.map((segment, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const label = labelMap[segment] || segment.replace(/-/g, " ");

        return (
          <span key={index} className="flex items-center space-x-1">
            <span className="mx-1">/</span>
            {isLast ? (
              <span className="text-gray-800 font-semibold capitalize">
                {label}
              </span>
            ) : (
              <Link to={routeTo} className="capitalize hover:text-gray-700">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
