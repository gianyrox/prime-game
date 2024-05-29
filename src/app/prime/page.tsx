"use client";
import { useState } from "react";

export default function Page() {
  const [prime, setPrime] = useState<number>(2);
  const [game, setGame] = useState<boolean>(true);

  const primeChecker = (x: number): boolean => {
    if (x < 2) return false;
    for (let index = 2; index <= Math.sqrt(x); index++) {
      if (x % index === 0) return false;
    }
    return true;
  };

  const handleYes = () => {
    if (primeChecker(prime)) {
      setPrime(prime + 1);
    } else {
      setGame(false);
    }
  };

  const handleNo = () => {
    if (!primeChecker(prime)) {
      setPrime(prime + 1);
    } else {
      setGame(false);
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center">
      {game ? (
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="font-4xl bg-grey-200"> Is this number prime?</p>
          <div className="flex items-center justify-center w-40 h-40 bg-gray-400 border-2 border-white rounded-lg">
            <p className="text-8xl">{prime}</p>
          </div>
          <div className="flex items-center justify-center flex-row gap-4">
            <button
              onClick={handleYes}
              className="flex items-center justify-center w-40 h-20 bg-green-400 hover:bg-green-500 rounded-lg"
            >
              <p className="text-4xl">Yes</p>
            </button>

            <button
              onClick={handleNo}
              className="flex items-center justify-center w-40 h-20 bg-red-400 hover:bg-red-500 rounded-lg"
            >
              <p className="text-4xl">No</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="font-4xl bg-grey-200"> Your Score</p>
          <div className="flex items-center justify-center w-40 h-40 bg-gray-400 border-2 border-white rounded-lg">
            <p className="text-8xl">{prime - 1}</p>
          </div>
        </div>
      )}
    </div>
  );
}
