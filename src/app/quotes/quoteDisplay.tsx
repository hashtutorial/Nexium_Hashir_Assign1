'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion'; // for animation (optional)

type Quote = {
  text: string;
  author: string;
};

export default function QuoteDisplay({ quotes }: { quotes: Quote[] }) {
  const [quote, setQuote] = useState<Quote | null>(null);

  const handleClick = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary tracking-tight">
        ✨ Inspire Me
      </h1>

      <Button
        onClick={handleClick}
        className="mb-8 transition-colors duration-300 hover:bg-primary/80 cursor-pointer"
      >
        Generate Quote
      </Button>

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
                <p className="text-sm text-muted-foreground">— {quote.author}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
