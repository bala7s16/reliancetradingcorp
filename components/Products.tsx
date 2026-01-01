"use client";

import { motion } from "framer-motion";

const products = [
    { name: "Reliance Aluminum Sheet", description: "High-quality polished aluminum sheets for industrial applications." },
    { name: "Stainless Steel Titanium Plate", description: "Durable stainless steel plates with titanium reinforcement." },
    { name: "Stainless Steel Rod", description: "Precision polished stainless steel rods for machining." },
    { name: "Brass and Copper Rod", description: "High-conductivity brass and copper rods." },
    { name: "Carbon Steel Bar", description: "Strong carbon steel bars for structural use." },
    { name: "Alloy Steel Pipe", description: "Polished alloy steel pipes for high-pressure systems." },
    { name: "Alloy Steel Tubes", description: "Precision seamless alloy steel tubes." }
];

const grades = [
    "EN 8", "EN 9", "EN 19", "EN 24", "EN 31", "EN 36", "EM 353",
    "HCHCR", "H 11", "H 13", "D2", "P20", "C45", "HSS"
];

const services = [
    {
        title: "Beam, Bar & Tube Cutting",
        description: "Sawing is the cutting of metal. Sawing and cutting material is accomplished in a variety of abrasive methods using a variety of equipment. Cutting involves equipment such as band saws, circular saws, contour saws, mitre saws, precision plate saws (for Aluminum) and others to achieve the desired shape and/or dimension. The sawing process can range from a single cut to production quantities."
    },
    {
        title: "Bending, Forming, Shaping",
        description: "Forming is the process of changing metal to customer-specified shapes. Processes include bending, cambering, plate or sheet forming, and roll-forming sheet metal into shapes such as Angles and Channels."
    },
    {
        title: "Coil & Flat Roll Processing",
        description: "Flat Roll processing is the process of rolling material from either coil or sheet feed stock. This process includes coil breakdown, coil slitting, sheet leveling (cut-to-length), oscillate slitting, sheet or coil perforating, precision blanking, and shearing to meet precise tolerances. Flat roll processing coil or sheet is done largely to meet custom specifications /requirements."
    },
    {
        title: "Machining & Manufacturing",
        description: "Machining refers to performing single or multiple processes to a piece of metal to produce a customer-specified component part. Machining includes beveling, chamfering, deburring, drilling, grinding, honing, skin or twin milling, turning, threading and stamping. Our diversity in equipment is capable of handling both large and small material and jobs. Manufacturing is the making or processing of Parts or Kits per customer specification using various processes such as welding and fabrication. Fabricating is a value-added process that readies pieces of material for product assembly."
    }
];

export function Products() {
    return (
        <section id="products" className="py-20 md:py-32">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Available <span className="text-primary">Products</span></h2>
                    <p className="text-lg text-muted-foreground">
                        We stock a comprehensive range of tool and alloy steels to meet your specific manufacturing requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 text-center flex flex-col items-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center max-w-4xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Available <span className="text-primary">Grades</span></h2>
                    <p className="text-lg text-muted-foreground">
                        We offer a wide range of high-quality grades to suit various industrial applications.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {grades.map((grade, index) => (
                        <motion.div
                            key={grade}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 text-foreground font-medium hover:bg-primary/10 transition-colors cursor-default"
                        >
                            {grade}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center max-w-4xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Processing <span className="text-primary">Services</span></h2>
                    <p className="text-lg text-muted-foreground">
                        State-of-the-art processing capabilities to deliver ready-to-use materials.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 text-center flex flex-col items-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                                {service.title}
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
