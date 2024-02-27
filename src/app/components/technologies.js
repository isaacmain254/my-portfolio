import Image from "next/image";

import Html from "../../../public/images/html.png";
import CSS from "../../../public/images/css.png";
import Javascript from "../../../public/images/js.png";
import Nodejs from "../../../public/images/nodejs.png";
import React from "../../../public/images/react.png";
import Nextjs from "../../../public/images/nextjs.png";
import Python from "../../../public/images/python.png";
import Django from "../../../public/images/django.png";
import Postgresql from "../../../public/images/postgres.png";
import MongoDB from "../../../public/images/mongodb.png";

const Technologies = () => {
  return (
    <div className="flex gap-5 justify-between px-5 mt-16 w-full max-w-[1121px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <Image
        src={Html}
        alt="HTML"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={CSS}
        alt="CSS"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={Javascript}
        alt="JavaScript"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={Nodejs}
        alt="Nodejs"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={React}
        alt="React"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={Nextjs}
        alt="Nextjs"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={Python}
        alt="python"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={Django}
        alt="Django"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={Postgresql}
        alt="Postgresql"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
      <Image
        src={MongoDB}
        alt="MongoDB"
        className="flex-1 shrink-0 w-14 aspect-square"
      />
    </div>
  );
};

export default Technologies;
