import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

// Mapping paths to their display text
const breadcrumbNameMap: { [key: string]: string } = {
  '': 'Home',
  'dashboard': 'Dashboard',
  'subscription': 'Subscriptions',
  'create-Subcription': 'Create Subscription Plan',
  'update-Subcription': 'Update Plan',
  'view-Subcription': 'Subscription Plan',
  // Add more paths as needed
};

function Location() {
  const location = useLocation(); // Gets current URL path
  const pathnames = location.pathname.split('/').filter((x) => x); // Splits the path into parts

  return (
    <div className=" py-2 font-medium px-5 mt-5 lg:mt-0">
      <nav className="breadcrumb text-2xl">
        <ul className="flex justify-center items-center">
          {/* Always show Home first */}
          <li>
            <Link to="/" className="cursor-pointer">
              {breadcrumbNameMap['']}
            </Link>
          </li>

          {pathnames.map((value, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[value] || value;

            return (
              <li key={index} className="flex items-center">
                {/* arrow before each except the very first (Home) */}
                <p className="mx-2">
                  <IoIosArrowForward />
                </p>

                {isLast ? (
                  <span className="text-gray-400">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="cursor-pointer hover:text-black">
                    {displayName}
                  </Link>
                )}
                
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Location;
