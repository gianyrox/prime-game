import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center">
      <button className="flex items-center justify-center w-40 h-20 bg-white rounded-lg text-black hover:text-white hover:bg-black hover:border-white border-2">
        <a href="prime" className=" flex items-center justfiy-center">
          <p className=" ">Play Prime</p>
        </a>
      </button>
    </div>
  );
}
