"use client";
import { motion } from "framer-motion";
import { CheckCircle, Layout, Layers, Code } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-indigo-500" />,
    title: "Easy to Use",
    description: "A user-friendly interface that is simple and intuitive.",
  },
  {
    icon: <Layout className="h-8 w-8 text-indigo-500" />,
    title: "Customizable Layouts",
    description:
      "Tailor your workspace to fit your needs with flexible layouts.",
  },
  {
    icon: <Layers className="h-8 w-8 text-indigo-500" />,
    title: "Collaboration",
    description: "Work with your team in real-time on shared documents.",
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-500" />,
    title: "Developer Friendly",
    description: "Integrate with various tools and APIs effortlessly.",
  },
];

export const Features = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-8 lg:px-12 text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
