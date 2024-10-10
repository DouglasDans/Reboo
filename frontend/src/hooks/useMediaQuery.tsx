'use client'

import { useState, useEffect } from 'react';

export default function useMediaQuery(breakpoint: string): boolean {
  let query = '(max-width: 768px)'

  switch (breakpoint) {
    case 'sm':
      query = '(max-width: 576px)'
      break
    case 'md':
      query = '(max-width: 768px)'
      break
    case 'lg':
      query = '(max-width: 992px)'
      break
    case 'xl':
      query = '(max-width: 1200px)'
      break
  }


  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}