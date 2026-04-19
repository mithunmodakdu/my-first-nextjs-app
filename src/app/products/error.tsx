"use client";

import { useEffect } from "react";

const ErrorPage = ({error, reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <h1 className="text-3xl text-red-700 text-center">Something went wrong!</h1>
      <h1 className="text-xl text-red-700 text-center">Error Message: {error?.message}</h1>
      <div className="text-center">
        <button onClick={() => reset()} className="bg-green-300 px-5 py-2">Try again</button>
      </div>
    </div>
  );
};

export default ErrorPage;