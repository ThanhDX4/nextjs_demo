import handler from "../api/hello";

export const getServerSideProps = async (context) => {
    const {
        req,
        query: { page },
        res,
    } = context;
    try {
        const response = await handler(context);
        return {
            props: { ...response },
        };
    } catch (error) {
        return {
            props: null,
        };
    }
};

export default function First(props) {
    console.log(props);
    return (
        <p className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
            Blog First Page
        </p>
    );
}
