import crypto from "crypto";

const byteSize = 8;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(context) {
    const bytes = crypto.randomBytes(byteSize);
    const value = bytes.toString("hex");
    const hashValue = crypto.createHash("sha256").update(value).digest("hex");

    return {
        name: "John Doe",
        id: hashValue,
    };
}
