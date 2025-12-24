import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid md:grid-cols-12 gap-12 items-center"
    >
      {/* Project Image - Large Scale */}
      <div className={`md:col-span-8 overflow-hidden bg-surfaceDark img-hover-zoom ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-[60vh] object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
        />
      </div>
      
      {/* Project Info - Offset and Minimal */}
      <div className={`md:col-span-4 space-y-8 ${index % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-primary/30 block mb-6">
            {project.category}
          </span>
          <h3 className="text-6xl font-serif font-bold tracking-tighter leading-none mb-6 group-hover:italic transition-all">
            {project.name}
          </h3>
          <div className={`h-px w-20 bg-primary/20 mb-8 ${index % 2 !== 0 ? 'ml-auto' : ''}`} />
          <p className="text-sm font-light leading-relaxed opacity-60 max-w-sm">
            {project.description}
          </p>
        </div>

        <button className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:gap-6 transition-all ${index % 2 !== 0 ? 'ml-auto' : ''}`}>
          explore project <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};