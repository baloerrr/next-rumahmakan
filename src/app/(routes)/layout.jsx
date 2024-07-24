import Provider from "../Provider";
import Nav from "@/components/Nav";
export default function UserLayout({ children }) {
  return (
        <Provider className="bg-[#B69C6D]">
          <div className="nav-top">
            <Nav />
          </div>
          {children}
        </Provider>
  );
}
