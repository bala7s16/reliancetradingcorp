"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-sm sm:text-xl tracking-tight text-primary z-50" onClick={closeMenu}>
                    RELIANCE TRADING CORPORATION
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#products" className="hover:text-primary transition-colors">Products</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>

                <div className="hidden md:flex items-center gap-4 h-full">
                    <Button asChild variant="default" className="inline-flex h-9">
                        <Link href="tel:08015055666">Call Now</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden z-50 p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 top-16 bg-background border-t border-white/10 z-40 md:hidden flex flex-col items-center pt-8 gap-8 p-4"
                        >
                            <nav className="flex flex-col items-center gap-8 text-lg font-medium text-foreground">
                                <a href="#about" onClick={closeMenu} className="hover:text-primary transition-colors">About</a>
                                <a href="#products" onClick={closeMenu} className="hover:text-primary transition-colors">Products</a>
                                <a href="#contact" onClick={closeMenu} className="hover:text-primary transition-colors">Contact</a>
                            </nav>
                            <Button asChild variant="default" className="w-full max-w-xs h-12 text-lg">
                                <Link href="tel:08015055666">Call Now</Link>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
