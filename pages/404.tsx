import style from "../styles/Pages.module.css";

export default function Custom404() {
  return (
    <>
      <div
        className={`${style.pagesBackground} flex h-[93vh] justify-center items-center`}
      >
        <h2 className="text-white text-3xl text-center">404 Page Not Found</h2>
      </div>
    </>
  );
}
