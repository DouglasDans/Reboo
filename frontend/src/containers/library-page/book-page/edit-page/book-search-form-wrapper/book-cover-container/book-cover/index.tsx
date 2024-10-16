'use client'

import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'

function isValidImageUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

const BookCover = ({ imageUrl }: { imageUrl: string }) => {
  const [validImageUrl, setValidImageUrl] = useState<string | null>(null);

  useEffect(() => {
    setValidImageUrl(null)
    if (typeof imageUrl === 'string') {
      isValidImageUrl(imageUrl).then((isValid) => {
        if (isValid) {
          setValidImageUrl(imageUrl);
        }
      });
    }
  }, [imageUrl]);

  return (
    <img
      src={validImageUrl || "/book-image-placeholder.png"}
      className={styles.coverImage}
      height={"190"}
      alt="Capa do livro"
    />
  );
};

export default BookCover;