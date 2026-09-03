"use client";

import { useEffect } from "react";

export default function ScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const sections = document.querySelectorAll("main > section");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    sections.forEach((section) => {
      section.classList.add("scroll-section");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
