import Link from "next/link";
import { useRouter } from "next/router";

export default function Example() {
    var router = useRouter();

    function handleClick() {
        router.push("/product");
    }

    return (
        <>
            <div className="my-8">
                <Link prefetch={false} href="/">
                    <div className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
                        Home
                    </div>
                </Link>
                <Link prefetch={false} href="/about">
                    <div className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
                        about
                    </div>
                </Link>
                <Link prefetch={false} href="/product">
                    <div className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
                        product
                    </div>
                </Link>
            </div>
            <button
                className="border text-white font-bold p-1 bg-green-700 mx-12 rounded"
                onClick={handleClick}
            >
                place order
            </button>
        </>
    );
}
