import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [thumbnailPage, setThumbnailPage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const THUMBNAILS_PER_PAGE = 3;
  const AUTOPLAY_INTERVAL = 3000; // 3 seconds

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0); // Reset to first image when opening project
      setThumbnailPage(0); // Reset to first page
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handlePrevThumbnails = () => {
    setThumbnailPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextThumbnails = () => {
    if (selectedProject === null) return;
    const maxPage =
      Math.ceil(
        projects[selectedProject].demoImages.length / THUMBNAILS_PER_PAGE
      ) - 1;
    setThumbnailPage((prev) => Math.min(maxPage, prev + 1));
  };

  const getTotalPages = (projectIndex: number) => {
    return Math.ceil(
      projects[projectIndex].demoImages.length / THUMBNAILS_PER_PAGE
    );
  };

  // Autoplay for mobile
  useEffect(() => {
    if (selectedProject !== null && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev < projects[selectedProject].demoImages.length - 1 ? prev + 1 : 0
        );
      }, AUTOPLAY_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [selectedProject, isAutoPlaying]);

  // Start autoplay on mobile when modal opens
  useEffect(() => {
    if (selectedProject !== null && typeof window !== "undefined") {
      setIsAutoPlaying(window.innerWidth < 1024); // Start autoplay on mobile/tablet
    }
  }, [selectedProject]);

  const handlePrevImage = () => {
    setIsAutoPlaying(false); // Stop autoplay when manually navigating
    setCurrentImageIndex((prev) =>
      prev > 0
        ? prev - 1
        : selectedProject !== null
        ? projects[selectedProject].demoImages.length - 1
        : 0
    );
  };

  const handleNextImage = () => {
    setIsAutoPlaying(false); // Stop autoplay when manually navigating
    setCurrentImageIndex((prev) =>
      prev <
      (selectedProject !== null
        ? projects[selectedProject].demoImages.length - 1
        : 0)
        ? prev + 1
        : 0
    );
  };

  const projects = [
    {
      title: "Bich Thuan Furniture",
      description:
        "E-commerce platform for furniture retail, inspired by Baya. Full-stack MERN application with product catalog, shopping cart, real-time chat, and order management features.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzA5NTYyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      liveUrl: "",
      githubUrl: "https://github.com/nguyenkhoa2308/bich-thuan-repo",
      demoImages: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800",
      ],
      detailedDescription:
        "A comprehensive e-commerce solution designed specifically for furniture retail business, inspired by the popular Baya platform. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this full-stack application combines an elegant, user-friendly frontend with a powerful backend infrastructure to deliver a seamless shopping experience. The platform supports complete product lifecycle management from browsing to purchase, with advanced features including real-time chat support for both customers and administrators.",
      features: [
        "Comprehensive product catalog with multiple categories (living room, bedroom, dining room, office furniture)",
        "Advanced filtering system by price, material, style, and brand",
        "Smart search functionality with autocomplete suggestions",
        "Interactive shopping cart with real-time price calculations and discount codes",
        "Secure checkout process with multiple payment options",
        "Real-time chat system using Socket.io for customer support and inquiries",
        "User account system with order history and wishlist",
        "Admin dashboard for inventory management and order tracking",
        "Responsive design optimized for desktop, tablet, and mobile devices",
        "MongoDB database for flexible and efficient data management",
        "Product image gallery with multiple views and zoom capabilities",
        "RESTful API architecture for scalable backend services",
      ],
    },
    {
      title: "Instagram Clone",
      description:
        "Social media application inspired by Instagram, built with Next.js, Node.js, Express, and MongoDB. Features user authentication, image sharing, real-time chat, and social interactions.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW18ZW58MHx8fHwxNzA5NTYyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/nguyenkhoa2308/insta-clone",
      demoImages: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800",
      ],
      detailedDescription:
        "A full-featured social media platform meticulously crafted to replicate Instagram's core functionalities and user experience. Built with a modern tech stack combining Next.js for the frontend and Node.js with Express for the backend, paired with MongoDB for flexible data storage. This project showcases modern web development practices and demonstrates deep understanding of complex state management, real-time communication using Socket.io, and social networking features. The application prioritizes performance, type safety, and scalable architecture.",
      features: [
        "Complete user authentication system with JWT tokens and secure session management",
        "User profile creation and customization with avatar upload and bio",
        "Image upload functionality with support for multiple formats and automatic optimization",
        "Feed system displaying posts from followed users in chronological order",
        "Like and comment system with real-time updates and notifications",
        "Follow/unfollow functionality with follower and following counts",
        "Real-time chat messaging using Socket.io for instant communication",
        "Direct messaging feature for private one-on-one conversations",
        "Story creation and viewing with 24-hour expiration",
        "Explore page to discover new users and trending content",
        "Responsive UI perfectly matching Instagram's clean and modern design aesthetic",
        "MongoDB database for efficient storage of users, posts, and messages",
        "RESTful API with Express.js for robust backend operations",
        "Infinite scroll for seamless content browsing experience",
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "Modern and responsive personal portfolio website showcasing my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS with smooth animations.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW98ZW58MHx8fHwxNzA5NTYyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://nguyenduckhoa-portfolio.vercel.app/",
      githubUrl: "https://github.com/nguyenkhoa2308/personal-portfolio",
      demoImages: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      ],
      detailedDescription:
        "A clean and modern portfolio website designed to showcase my professional work and technical skills. Built with Next.js, TypeScript, and Tailwind CSS, focusing on smooth animations and user experience using Framer Motion library.",
      features: [
        "Fully responsive design for all screen sizes",
        "Smooth scroll animations with Framer Motion",
        "Hero section with animated introduction",
        "Projects showcase with interactive cards and detail modals",
        "Skills section displaying technical proficiencies",
        "Experience timeline with work history",
        "Education background section",
        "Contact form for easy communication",
        "Clean and modern UI design with Tailwind CSS",
        "Fast performance with Next.js optimization",
      ],
    },
  ];

  return (
    <>
      <section
        className="py-20 bg-background relative overflow-hidden"
        ref={ref}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h2
              className="text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, delay: 0.2 }}
            >
              PROJECTS
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Recent projects I&apos;ve developed using modern technologies
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="group h-full"
                onDoubleClick={() => setSelectedProject(index)}
              >
                <div className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      width={400}
                      height={192}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Hover overlay with links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-300 rounded flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-300 rounded flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      )}
                    </motion.div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedProject(index)}
                      className="flex items-center text-primary cursor-pointer group-hover:text-primary/80 transition-colors duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/*
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Xem Tất Cả Dự Án
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div> */}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 gap-4"
              onClick={() => setSelectedProject(null)}
            >
              {/* Image Gallery - Separate Card on Left */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="hidden lg:flex flex-col w-[550px] bg-card border border-border rounded-lg p-6 max-h-[90vh] flex-shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Screenshots
                </h4>

                {/* Main Large Image with Navigation */}
                <div className="relative h-[400px] rounded-lg mb-4 flex-shrink-0 border-2 border-primary/30 overflow-hidden group/carousel">
                  {/* Previous Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 z-10 opacity-0 group-hover/carousel:opacity-100"
                    title="Ảnh trước"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 z-10 opacity-0 group-hover/carousel:opacity-100"
                    title="Ảnh sau"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() =>
                      setSelectedImage(
                        projects[selectedProject].demoImages[currentImageIndex]
                      )
                    }
                  >
                    <Image
                      width={1200}
                      height={900}
                      src={
                        projects[selectedProject].demoImages[currentImageIndex]
                      }
                      alt={`${projects[selectedProject].title} main screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                        Click to enlarge
                      </div>
                    </div>
                  </motion.div>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {projects[selectedProject].demoImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                          setIsAutoPlaying(false);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                          currentImageIndex === idx
                            ? "w-6 h-2 bg-primary"
                            : "w-2 h-2 bg-white/50 hover:bg-white/80"
                        }`}
                        title="Dot button"
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Carousel */}
                <div className="relative">
                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {projects[selectedProject].demoImages
                      .slice(
                        thumbnailPage * THUMBNAILS_PER_PAGE,
                        (thumbnailPage + 1) * THUMBNAILS_PER_PAGE
                      )
                      .map((img, idx) => {
                        const actualIndex =
                          thumbnailPage * THUMBNAILS_PER_PAGE + idx;
                        return (
                          <motion.div
                            key={actualIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                              currentImageIndex === actualIndex
                                ? "border-primary ring-2 ring-primary/50"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setCurrentImageIndex(actualIndex)}
                          >
                            <Image
                              width={200}
                              height={150}
                              src={img}
                              alt={`${
                                projects[selectedProject].title
                              } thumbnail ${actualIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {currentImageIndex !== actualIndex && (
                              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300" />
                            )}
                          </motion.div>
                        );
                      })}
                  </div>

                  {/* Navigation Controls */}
                  {getTotalPages(selectedProject) > 1 && (
                    <div className="flex items-center justify-between gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={handlePrevThumbnails}
                        disabled={thumbnailPage === 0}
                        className={`p-2 rounded-lg transition-colors ${
                          thumbnailPage === 0
                            ? "bg-muted/20 text-muted-foreground/30 cursor-not-allowed"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        title="Ảnh trước"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="flex gap-1.5">
                        {Array.from({
                          length: getTotalPages(selectedProject),
                        }).map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setThumbnailPage(idx)}
                            className={`transition-all duration-300 rounded-full ${
                              thumbnailPage === idx
                                ? "w-6 h-2 bg-primary"
                                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            }`}
                            title="Dot"
                          />
                        ))}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={handleNextThumbnails}
                        disabled={
                          thumbnailPage === getTotalPages(selectedProject) - 1
                        }
                        className={`p-2 rounded-lg transition-colors ${
                          thumbnailPage === getTotalPages(selectedProject) - 1
                            ? "bg-muted/20 text-muted-foreground/30 cursor-not-allowed"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        title="Ảnh sau"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Project Details - Main Card on Right */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, type: "spring", damping: 25 }}
                className="bg-card border border-border max-w-2xl w-full max-h-[90vh] rounded-lg overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-card border-b border-border p-6 flex justify-between items-center flex-shrink-0">
                  <h3 className="text-2xl font-bold text-foreground">
                    {projects[selectedProject].title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    title="Đóng dialog"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1 space-y-6">
                  {/* Mobile Image Carousel */}
                  <div className="lg:hidden relative h-64 rounded-lg border-2 border-primary/30 overflow-hidden group/mobile-carousel mb-6">
                    {/* Previous Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 z-10"
                      title="Ảnh trước"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 z-10"
                      title="Ảnh sau"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full cursor-pointer"
                      onClick={() =>
                        setSelectedImage(
                          projects[selectedProject].demoImages[
                            currentImageIndex
                          ]
                        )
                      }
                    >
                      <Image
                        width={800}
                        height={600}
                        src={
                          projects[selectedProject].demoImages[
                            currentImageIndex
                          ]
                        }
                        alt={`${projects[selectedProject].title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {projects[selectedProject].demoImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                            setIsAutoPlaying(false);
                          }}
                          className={`transition-all duration-300 rounded-full ${
                            currentImageIndex === idx
                              ? "w-6 h-2 bg-primary"
                              : "w-2 h-2 bg-white/70 hover:bg-white"
                          }`}
                          title="Dot"
                        />
                      ))}
                    </div>

                    {/* Autoplay Indicator */}
                    {isAutoPlaying && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 rounded-full text-white text-xs flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Auto
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      About This Project
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={projects[selectedProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                    {projects[selectedProject].liveUrl && (
                      <a
                        href={projects[selectedProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Image Viewer Modal - Rendered at Root Level */}
      <AnimatePresence>
        {selectedImage && selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 gap-4"
            onClick={() => setSelectedImage(null)}
            style={{ margin: 0 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              title="Đóng ảnh"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const prevIndex =
                  currentImageIndex > 0
                    ? currentImageIndex - 1
                    : projects[selectedProject].demoImages.length - 1;
                setCurrentImageIndex(prevIndex);
                setSelectedImage(
                  projects[selectedProject].demoImages[prevIndex]
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              title="Ảnh trước"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const nextIndex =
                  currentImageIndex <
                  projects[selectedProject].demoImages.length - 1
                    ? currentImageIndex + 1
                    : 0;
                setCurrentImageIndex(nextIndex);
                setSelectedImage(
                  projects[selectedProject].demoImages[nextIndex]
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              title="Ảnh sau"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Main Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center w-full px-16"
              style={{ height: "calc(100vh - 180px)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                width={2400}
                height={1600}
                src={selectedImage}
                alt="Project screenshot"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                style={{ display: "block" }}
              />
            </motion.div>

            {/* Thumbnail Strip */}
            <div
              className="w-full max-w-6xl px-16 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2 overflow-x-auto pb-2 justify-center scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {projects[selectedProject].demoImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className={`relative h-20 w-28 flex-shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                      currentImageIndex === idx
                        ? "border-white ring-2 ring-white/50"
                        : "border-white/30 hover:border-white/60"
                    }`}
                    onClick={() => {
                      setCurrentImageIndex(idx);
                      setSelectedImage(img);
                    }}
                  >
                    <Image
                      width={200}
                      height={150}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {currentImageIndex !== idx && (
                      <div className="absolute inset-0 bg-black/50 hover:bg-black/20 transition-colors duration-300" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              {currentImageIndex + 1} /{" "}
              {projects[selectedProject].demoImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
