import Link from "next/link";
import { randomBytes, createHash } from "crypto";

const byteSize = 8;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const handlerRandomValue = () => {
    const bytes = randomBytes(byteSize);
    const value = bytes.toString("hex");
    const hashValue = createHash("sha256").update(value).digest("hex");

    return hashValue;
};

export default function Blog() {
    return (
        <>
            <Link prefetch={false} href="/blog/first">
                <div className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
                    Blog First
                </div>
            </Link>
            <p className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
                Blog Page
            </p>
        </>
    );
}
