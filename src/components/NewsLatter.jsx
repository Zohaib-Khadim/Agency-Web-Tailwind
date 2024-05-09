import React from "react";

const NewsLatter = () => {
  return (
    <div className="bg-[#2699fb] p-4  mt-4">
      <div className=" justify-between py-[70px] mx-auto md:flex max-w-[1050px]">
        <div>
          <h1 className="text-white text-4xl font-bold">
            Want To Learn I.T Skills?{" "}
          </h1>
          <span className="text-white">
            Signup to our newslatter and stay up to date.
          </span>
        </div>
        <div>
          <input
            className="  p-2 rounded mr-2 text-slate-300 w-[270px]"
            type="email"
            placeholder="Enter Email"
            name=""
            id=""
          />
          <button className="bg-black text-white  p-2 rounded w-[120px]">
            Notify Me
          </button>

          <p className="mt-2 text-white">
            We Care about the protection of your data.Read our <br />{" "}
            <a href="/" className="text-black">
              Privacy Policy
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
