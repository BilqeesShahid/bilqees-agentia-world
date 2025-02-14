"use client";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function PerformanceGraph() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) {
      console.error("Canvas element is not available.");
      return;
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) {
      console.error("Canvas context is not available.");
      return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(6, 182, 212, 0.2)");
    gradient.addColorStop(1, "rgba(6, 182, 212, 0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Performance",
            data: [40, 60, 30, 70, 50, 80, 45],
            borderColor: "#06b6d4",
            backgroundColor: gradient,
            pointBorderColor: "#a855f7",
            pointBackgroundColor: "#a855f7",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: "#6b7280" } },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <motion.section
      className="w-full py-20 bg-gradient-to-b from-gray-950 to-purple-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Real-Time Performance Graph
        </h2>
        <div className="w-full h-80 bg-gray-900 border border-purple-700 rounded-lg flex items-center justify-center p-6">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <canvas ref={chartRef}></canvas>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
