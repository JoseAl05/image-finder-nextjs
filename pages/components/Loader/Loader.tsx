import { RiLoader3Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Loader = () => {
    return (
        <>
            <div className="text-3xl h-[5vh] text-white font-bold animate-pulse text-center mt-5">
                <h1>Loading...</h1>
            </div>
        </>
    );
}

export default Loader;