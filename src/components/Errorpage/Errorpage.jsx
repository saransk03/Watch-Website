import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const data = useRouteError();

  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#481E14]">
              {data.status}
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              {data.statusText}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link to={"/"}
              href="#"
              className="inline-flex text-white bg-[#481E14] hover:bg-[#a93c24] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Errorpage;
