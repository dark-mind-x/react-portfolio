import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        
        {/* Card 1 */}
        <ProjectCard 
          title="Smart Agriculture System" 
          description="IoT based soil monitoring system using ESP32 and Cloud integration." 
          tags={['IoT', 'ESP32', 'C++']} 
        />

        {/* Card 2 */}
        <ProjectCard 
          title="VLSI Processor Design" 
          description="Designed a 32-bit RISC processor using Verilog HDL." 
          tags={['Verilog', 'VLSI', 'ModelSim']} 
        />

        {/* Card 3 */}
        <ProjectCard 
          title="Network Vulnerability Scanner" 
          description="Python tool to scan ports and detect security weaknesses." 
          tags={['Python', 'Cybersecurity', 'Networking']} 
        />

      </div>
    </section>
  )
}

export default Projects
