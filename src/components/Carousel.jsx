import { BiLink, BiLogoGithub } from "react-icons/bi";

const Carousel = ({ site }) => {
  return (
    <>
      <div className="transition duration-200 ease-in-out shadow-md rounded-md overflow-hidden bg-white flex flex-col border border-gray-300">
        <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block  cursor-pointer">
          <a href={site.link} className="">
            <img src={site.imageUrl} />
          </a>
        </div>
        <div className="p-6">
          <div className="mb-3 text-xl">{site.title}</div>
          <div className="mb-3 font-light">{site.description}</div>

          <div>
            <ul className="flex flex-row flex-wrap ">
              <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                {site.tags.map((tag) => (
                  <span className="inline-block bg-gray-200 rounded-sm mr-2 px-2 py-1 text-xs font-normal last:mr-0">
                    {tag}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-row items-center ">
            <a
              href={site.link}
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white  mr-4 bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300"
            >
              <BiLink />
              &nbsp; Visit
            </a>
            {site.repo && (
              <a
                href={site.repo}
                className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white  mr-4 bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300"
              >
                <BiLogoGithub />
                &nbsp; Source code
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
