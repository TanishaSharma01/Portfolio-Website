import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedProgressProps {
  value: number;
  label: string;
  color: string;
  delay?: number;
}

export default function AnimatedProgress({ value, label, color, delay = 0 }: AnimatedProgressProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className={`text-sm font-medium ${color}`}>{value}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${value}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500`}
        />
      </div>
    </div>
  );
}
