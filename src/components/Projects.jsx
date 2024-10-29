import { FaGithub, FaMedium, FaYoutube } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 pt-4"
            >
              <img
                src={project.image}
                alt={project.title}
                // width={250}
                // height={250}
                className="mb-6 rounded w-[310px] h-[170px] object-fit"
              />
            </motion.div>
            {/* <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a> */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="mb-2 flex items-center">
                <h3 className="font-semibold text-2xl">{project.title}</h3>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="ml-4 text-2xl" // Adjust icon size here
                >
                  <FaGithub />
                </a>

                {project.mediumLink && (
                  <a
                    href={project.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    className="ml-4 text-2xl" // Adjust icon size here
                  >
                    <FaMedium className="rounded-lg" />
                  </a>
                )}

                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    className="ml-4 text-2xl" // Adjust icon size here
                  >
                    <FaYoutube className="rounded-lg" />
                  </a>
                )}
              </div>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
