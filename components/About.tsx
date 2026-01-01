import Image from "next/image";
import { BadgeCheck, ShieldCheck, History } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-12 md:py-32 bg-secondary/5 overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1 space-y-8 text-left flex flex-col items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <History className="w-4 h-4" />
                                <span>Established 1992</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Your Trusted Partner in <span className="text-primary">Steel Trading</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                Reliance Trading Corporation has been a cornerstone in the Chennai steel market for over three decades. Located in Kundrathur and Ekkaduthangal, we specialize in high-quality tool steels, alloy steels, and industrial hardware supplies.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <div className="flex flex-col gap-4 items-start p-6 rounded-xl bg-background/50 border border-white/5 hover:border-primary/20 transition-colors group">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <BadgeCheck className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-lg">Premium Quality</h4>
                                    <p className="text-sm text-muted-foreground">Certified materials from top manufacturers</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start p-6 rounded-xl bg-background/50 border border-white/5 hover:border-primary/20 transition-colors group">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-lg">Reliable Service</h4>
                                    <p className="text-sm text-muted-foreground">Timely delivery and expert consultation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 transform translate-y-8">
                                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <Image
                                        src="/images/about/shop-entrance.png"
                                        alt="Reliance Steel Corporation Entrance"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <Image
                                        src="/images/about/steel-rack.jpg"
                                        alt="Steel Inventory"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <Image
                                        src="/images/about/cutting-machine.jpg"
                                        alt="Cutting Machinery"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <Image
                                        src="/images/about/steel-stack.jpg"
                                        alt="Steel Material Stack"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30" />
                    </div>
                </div>
            </div>
        </section>
    );
}
