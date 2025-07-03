'use client';
//client component
// This file is a client component that allows users to toggle between light and dark themes and navigate
import { useState, useEffect } from 'react';
import styles from './home/home.module.css';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Homepage() 
{
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={styles.page}>
      <div className={styles.themeToggle}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`${styles.toggleBtn} ${darkMode ? styles.dark : ''}`}
          aria-label="Toggle Theme"
        >
          <div className={styles.iconWrapper}>
            <Sun className={styles.sunIcon} />
            <Moon className={styles.moonIcon} />
          </div>
        </button>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>✨ Welcome to the Quote Generator</h1>
        <p className={styles.subtitle}>Inspire yourself with fresh thoughts.</p>

        <Link href="/quotes" className={styles.button}>
          Go to Generator →
        </Link>
      </div>
    </div>
  );
}
