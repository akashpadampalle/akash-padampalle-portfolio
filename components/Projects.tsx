import Image from "next/image"

const projects = [
    {
        title: "Student Insight",
        img: "/student-insights.jpg",
        codeURL: "https://github.com/akashpadampalle/student-insight",
        demoURL: "https://student-insight-client.vercel.app/"
    },
    {
        title: "Game Hub",
        img: "/game-hub.jpg",
        codeURL: "https://github.com/akashpadampalle/game-hub",
        demoURL: "https://game-hub-gules.vercel.app/"
    },
    {
        title: "Products API",
        img: "/product-api.svg",
        codeURL: "https://github.com/akashpadampalle/product-variant-api",
        demoURL: "https://product-variant-api.onrender.com/docs/"
    }
]

const Projects = () => {
    return (
        <div className="px-10 py-32 text-center mt-28 bg-rose-400">
            <h2 className="text-4xl mb-8 font-semibold text-gray-800">Personal Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={`project-${index}`} className="rounded-xl shadow-xl overflow-hidden p-8 bg-white">
                        <div className="flex justify-center">
                            <Image
                                src={project.img}
                                alt={`img-${project.title}`}
                                width={256}
                                height={256}
                            />
                        </div>
                        <h3 className=" my-8 text-xl text-gray-800">{project.title}</h3>
                        <div className="flex justify-between mt-4">
                            <a
                                href={project.codeURL}
                                target="_blank"
                                className="text-purple-600 border-2 rounded-full border-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-500 ">
                                Code
                            </a>
                            <a 
                            href={project.demoURL} 
                            target="_blank"
                            className="text-purple-600 border-2 rounded-full border-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-500 ">
                                Visit
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Projects