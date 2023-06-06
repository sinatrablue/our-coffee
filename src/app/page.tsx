import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="d-flex justify-content-center p-5 mb-5 shadow-sm">
          Home page
        </h1>
      </header>
      <div className="d-flex justify-content-between fs-2 px-5">
        {/* TODO add some style for the links, no decorations + button appearance */}
        <Link href="/shop">Shop</Link>
        <Link href="/coffee">Coffee</Link>
      </div>
    </>
  );
}
