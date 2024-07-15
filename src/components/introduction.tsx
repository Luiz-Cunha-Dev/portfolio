import Image from "next/image";
import me from "../assets/me.jpg";

const Introduction = () => {
    return (
        <section id="introduction" className="flex items-top justify-around min-h-full w-5/6 m-36">
            <div className="h-full flex flex-col justify-center items-center pt-12">
                <h1 className="text-7xl text-white mb-2">Hi, my<br/>
                name is <span className="text-[#597ae8]">Luiz Cunha</span>.</h1>
                <p className="text-3xl text-white">I&apos;m a full-stack developer from Campinas, Brazil.</p>
            </div>
            <div className="h-5/6 flex flex-col justify-center">
                <Image src={me} alt="me" width={425} height={425} className="rounded-md" />
            </div>
        </section>
    );
}

export default Introduction;