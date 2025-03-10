"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../global/container";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface Certification {
  id: number;
  image: string;
  title: string;
  description: string;
}

const SecurityCertifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      image: "/images/layers.png",
      title: "7 Layers",
      description: "7 Layers is a veteran-owned and operated business specializing in penetration testing, adversary emulation, and security awareness. Their comprehensive evaluation confirms our commitment to protecting your data.",
    },
    {
      id: 2,
      image: "/images/horizon.png",
      title: "Horizon Security",
      description: "Horizon Security has validated our security infrastructure through rigorous testing protocols. Their certification demonstrates our dedication to maintaining a secure environment.",
    },
    {
      id: 3,
      image: "/images/sse.png",
      title: "SSE",
      description: "Security Service Edge (SSE) certification ensures our platform meets stringent security standards, providing robust protection for your data and applications.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [certifications.length]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 bg-gradient-to-b from-background to-background/60">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Enterprise-grade <br />
            <span className="font-subheading italic">security certifications</span>
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
            Our platform adheres to the highest security standards and compliance requirements to keep your data safe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/5 rounded-xl z-10" />

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {certifications.map((_, index) => (
                <div 
                  key={`indicator-${index}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={certifications[currentIndex].image}
                    alt={`${certifications[currentIndex].title} certification`}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-start text-left h-[300px] sm:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
                  <CardContent className="p-6 flex flex-col h-full justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{certifications[currentIndex].title}</h3>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Security Certified
                      </Badge>
                    </div>
                    
                    <p className="text-accent-foreground/90 leading-relaxed">
                      {certifications[currentIndex].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecurityCertifications;
