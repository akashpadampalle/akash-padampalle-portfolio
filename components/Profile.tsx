import Image from "next/image";

const Profile = () => {
    return (
        <div>
            <div className="px-10">
                <div className="mb-6">
                    <h2 className="text-center text-5xl mb-4 tracking-tight text-gray-700 font-semibold">Full Stack Web Developer</h2>
                    <p className="text-center text-gray-500 text-lg font-normal tracking-widest">Coding the Future, One Stack at a Time.</p>
                </div>
                <div className="flex justify-center mb-8">
                    <Image
                        src="/profile.png"
                        alt="Akash Padampalle"
                        width={192}
                        height={192}
                        className="overflow-hidden rounded-full"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/programmer-Illustration.svg"
                        alt="I love programming"
                        width={720}
                        height={256}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile