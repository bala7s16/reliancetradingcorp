"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 pt-24 md:pt-0">
            {/* Background decoration */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-background to-background opacity-40" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 max-w-6xl mx-auto"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        Authorized Dealer & Stockist
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                        Trusted Steel Dealers <br />
                        <span className="text-primary">Since 1992</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto">
                        For over 30 years, Reliance Steel Corporation has been a cornerstone in the steel industry, providing high-quality tools and alloy steels to manufacturers across Tamil Nadu.
                        We are an authorized dealer committed to quality and reliability, ensuring that every product we supply meets the highest industrial standards. We specialize in sourcing and supplying premium grades of steel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="text-base px-8 h-12">
                            <Link href="#products">View Catalog</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
                            <Link href="#contact" className="group">
                                Contact Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6 opacity-80 hover:opacity-100 transition-opacity">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="tracking-wide">GST: 33ARCPM0146L1ZZ</span>
                    </div>

                    <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/50 mt-12">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-primary">30+</span>
                            <span className="text-sm text-muted-foreground mt-1">Years Experience</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-primary">Premium</span>
                            <span className="text-sm text-muted-foreground mt-1">Quality Certified</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-primary">Reliable</span>
                            <span className="text-sm text-muted-foreground mt-1">Service & Support</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
