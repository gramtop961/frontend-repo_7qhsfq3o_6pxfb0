import React, { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    const title = 'Ankit Ranjan Das — Full-Stack Developer';
    const description = 'Dark, professional portfolio showcasing skills, projects, and contact for Ankit Ranjan Das.';
    const url = window.location.origin;
    const image = `${url}/og-image.png`;

    document.title = title;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('theme-color', '#0b1120');

    // Open Graph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', image, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
  }, []);

  return null;
}
