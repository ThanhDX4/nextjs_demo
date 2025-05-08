import Link from "next/link";

export default function Product() {
    return (
        <>
            <div>
                <Link href="/">
                    <div className="mx-4">Home</div>
                </Link>
                <h1 className="mx-16 mt-16 text-xl font-bold text-green-600 cursor-pointer">
                    Product List
                </h1>
                <div className="text-gray-600 mx-16 mt-4">
                    <Link href="/product/1">
                        <div className="mx-4">Product 1</div>
                    </Link>
                    <Link href="/product/2">
                        <div className="mx-4">Product 2</div>
                    </Link>
                    <Link href="/product/3">
                        <div className="mx-4">Product 3</div>
                    </Link>
                    <Link href="/product/4">
                        <div className="mx-4">Product 4</div>
                    </Link>
                </div>
            </div>
        </>
    );
}
