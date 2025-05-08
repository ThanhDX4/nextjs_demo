import { useRouter } from "next/router";

export default function Docs() {

  const router = useRouter();

  const { params =[] } = router.query;
  console.log(params);
  
  if (params.length === 2) {
    return (
      <h1 className="mx-16 mt-16 text-xl font-bold text-green-600 cursor-pointer">
        The docs of head {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return (
      <h1 className="mx-16 mt-16 text-xl font-bold text-green-600 cursor-pointer">
        The docs of head {params[0]}
      </h1>
    );
  }
  return (
    <>
      <div>
        <h1 className="mx-16 mt-16 text-xl font-bold text-green-600 cursor-pointer">
          Docs Home page
        </h1>
      </div>
    </>
  );
}
