'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

type Quote = {
  text: string;
  author: string;
};

const textColors = [
  'text-primary',
  'text-secondary',
  'text-accent',
  'text-info',
  'text-success',
  'text-warning',
  'text-error',
];

export default function QuoteDisplay({ quotes }: { quotes: Quote[] }) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [colorClass, setColorClass] = useState('text-primary');

  const handleClick = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    const color = textColors[Math.floor(Math.random() * textColors.length)];
    setQuote(random);
    setColorClass(color);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary tracking-tight">
        ✨ Inspire Me
      </h1>

      <Button
        onClick={handleClick}
        className="mb-6 transition-colors duration-300 hover:bg-primary/80 cursor-pointer"
      >
        Generate Quote
      </Button>

      <AnimatePresence mode="wait">
        {quote && (
          <motion.div
            key={quote.text + 'alert'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className={`alert bg-base-100 shadow-md mb-4 w-full max-w-xl justify-center font-semibold ${colorClass}`}
          >
            <span>✨ New quote loaded!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {quote && (
          <motion.div
            key={quote.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl"
          >
            <Card className="backdrop-blur-md border border-border shadow-2xl rounded-2xl transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <p className="text-xl font-medium italic text-foreground leading-relaxed">
                  “{quote.text}”
                </p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-muted-foreground">— {quote.author}</p>
                  <div className="badge badge-outline badge-primary text-xs">{quote.author.length > 10 ? 'Legend' : 'Thinker'}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
         Visit daily for new quotes!
      </footer>
    </div>
  );
}
