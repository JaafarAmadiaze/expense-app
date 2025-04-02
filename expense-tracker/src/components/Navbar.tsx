import { Link } from "react-router-dom"; // Ensure you're using React Router for navigation
import { LayoutDashboard, Receipt, PiggyBank, Brain ,ChartLine} from "lucide-react"; // Import icons
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const links = [
  { to: "/", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
  { to: "/expenses", icon: <Receipt size={18} />, label: "Expenses" },
  { to: "/budget", icon: <PiggyBank size={18} />, label: "Budget" },
  { to: "/advisor", icon: <Brain size={18} />, label: "Advisor" },
  { to: "/report", icon: <ChartLine size={18} />, label: "Rapports" },
];

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="flex items-center gap-2">
                    {link.icon} {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Wealth</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="flex items-center gap-2">
                  {link.icon} {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </div>
    </>
  );
}
