import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-12 md:py-32 bg-secondary/5 border-t border-white/5">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Contact us for quotes, inquiries, or to visit our facility. We are open Monday through Saturday.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8">


                        <div className="space-y-10">
                            <div className="flex flex-col items-start gap-4">
                                <MapPin className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                                    <p className="text-muted-foreground mb-3">
                                        No.21, 22, Sri Sakthi Amman Nagar,<br />
                                        Natham, Kundrathur,<br />
                                        Chennai, Tamil Nadu 600069
                                    </p>

                                    <h3 className="font-semibold text-foreground mb-2">Guindy Branch</h3>
                                    <p className="text-muted-foreground">
                                        No 2/13, Ambal Nagar,<br />
                                        Near Ambal Nagar Bus Stand,<br />
                                        Pillayar Koil 3rd Street,<br />
                                        Ekkaduthangal, Chennai - 600032
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <Phone className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                                    <p className="text-muted-foreground hover:text-primary transition-colors text-lg">
                                        <a href="tel:08015055666">+91 80150 55666</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <Clock className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                                    <p className="text-muted-foreground">
                                        Mon - Sat: 9:30 AM – 6:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="mt-4" asChild>
                            <Link href="tel:08015055666">Call Now</Link>
                        </Button>
                    </div>

                    <div className="h-[400px] bg-muted rounded-2xl overflow-hidden border border-border relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.828552102875!2d80.09776207599298!3d12.979054787336987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b4375211da1%3A0xa4d79daf3f4a0017!2sRELIANCE%20TRADING%20CORPORATION!5e0!3m2!1sen!2sin!4v1715200000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
