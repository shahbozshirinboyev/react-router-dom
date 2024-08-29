import { Link, useLocation } from "react-router-dom";

function BreadCrumps() {
  const { pathname } = useLocation();

  const currentLink = [];

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join('')} >{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumps;
