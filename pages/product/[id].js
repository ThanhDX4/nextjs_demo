import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductDetails() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Link href="/">
                <div>Home</div>
            </Link>

            <p className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
                Product Product Details {id}
            </p>
        </>
    );
}
