const projects = [
    {
        title: "Example title",
        description: "Example Description",
        techStack: ["Example", "Example API"],
        link: "Github Link"
    },
    // Add more projects here
];

function Projects() {
    return (
        <section id="projects" className="bg-white py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">
                  Description of the project goes here. It explains the technologies used and the challenges solved.
                </p>
                <a href="#" className="text-blue-500 hover:underline">View Project</a>
              </div>
              {/* More project cards */}
            </div>
          </div>
        </section>
      );
    }

export default Projects;