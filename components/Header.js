export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex items-center justify-between" aria-label="Global">
          <div className="header-left order-2 lg:order-1">
            <img
              src="https://placehold.co/600x400"
            />
          </div>
          <div className="header-center order-4 lg:order-2">
            <p>The hometown corner store, where we know you by name</p>
          </div>
          <div className="header-right order-1 lg:order-3">
            <p>test</p>
          </div>
        </nav>
      </header>
    </>
  );
}
