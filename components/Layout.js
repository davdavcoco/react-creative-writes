import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-6 md:max-w-3xl md:mx-auto lg:max-w-4xl font-poppins">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
