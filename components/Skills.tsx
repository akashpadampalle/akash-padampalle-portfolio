
const skills = [
    {
        genre: "Frontend",
        items: ["ReactJS", "NextJS", "Redux", "TailwindCSS", "MaterialUI", "HTML", "CSS"]
    },
    {
        genre: "Backend",
        items: ["NodeJS", "ExpressJS", "NextJS", "MongoDB", "MySQL", "Firebase", "RESTful api"]
    },
    {
        genre: "Others",
        items: ["Typescript", "Javascript", "Java", "Git", "Linux"]
    }
]

const Skills = () => {

    return (
        <div>
            <div className="bg-purple-500 text-gray-100 text-justify px-8 pt-12 pb-36 lg:px-64">
                <h2 className="text-center mb-6 text-3xl font-semibold">Hi, I&apos;m Akash. Nice to meet you</h2>
                <p className="font-light text-lg">
                    I&apos;m dedicated Full Stack Web Developer. I&apos;ve honed my skills in technologies
                    like ReactJS, NodeJS, ExpressJS, and MongoDB through comprehensive learning and hands-on
                    projects. I am eager to bring my passion and expertise to a collaborative team,
                    contributing to the success of innovative web projects.
                </p>
            </div>
            <div className="px-8 -mt-24 text-center grid gap-8 grid-cols-1 md:grid-cols-3">
                {skills.map((item, index) => (
                    <div className="bg-white rounded-lg shadow-xl pb-4" key={`$skillcard-${index}`}>
                        <h3 className="text-xl py-4 font-medium">{item.genre}</h3>
                        <ul>
                            {item.items.map((skill, index) => (
                                <li key={`skill-${item.genre}-${index}`}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills