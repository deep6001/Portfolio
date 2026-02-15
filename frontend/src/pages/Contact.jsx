"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import AnimatedEmoji from "../components/AnimantedEmoji";
import PageTransition from "../components/PageTransition";
import { useAnalytics } from "@/hooks/useAnalytics";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

function Contact() {
    const { sessionId, getAnalyticsData } = useAnalytics();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const contact = {
        email: "pateldeep120404@gmail.com",
        phone: "+91 8866193944",
        address: "Navsari, Gujarat, India",
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [resetFace, setResetFace] = useState(false);

    const filledCount = Object.values(formData).filter(Boolean).length;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResetFace(true);
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    sessionId,
                    analyticsData: getAnalyticsData()
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 3000);
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError(`Failed to connect to the server. Please try again later:-${err}`);
            console.log(err)
        } finally {
            setLoading(false);
            setResetFace(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <PageTransition>
            <section className="mt-24 px-4 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 flex justify-center -z-10">
                    <div className="w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* LEFT SIDE - Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold leading-tight">
                            Let’s Build Something <span className="text-neutral-600">Great</span>
                        </h2>

                        <p className="text-neutral-500">
                            Whether you have a project idea or just want to connect,
                            feel free to reach out. I’d love to hear from you.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-3 text-neutral-700"
                            >
                                <Mail size={18} className="text-blue-500" />
                                {contact.email}
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-3 text-neutral-700"
                            >
                                <Phone size={18} className="text-green-500" />
                                {contact.phone}
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-3 text-neutral-700"
                            >
                                <MapPin size={18} className="text-red-500" />
                                {contact.address}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* <AnimatedEmoji
                            filledCount={filledCount}
                            resetTrigger={resetFace}
                        /> */}
                        <Card className="relative rounded-2xl shadow-lg border backdrop-blur-lg bg-white/80 dark:bg-neutral-900 dark:border-neutral-700">

                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                    />

                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                    />

                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                    />


                                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                                    {/* Animated Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                                            ) : submitted ? (
                                                <>
                                                    <Mail size={18} />
                                                    Sent Successfully
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>

                                </form>
                            </CardContent>

                            {/* Success Pulse */}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 bg-green-400 blur-2xl rounded-2xl -z-10"
                                />
                            )}
                        </Card>
                    </motion.div>
                </motion.div>
            </section>
        </PageTransition>
    );
}

export default Contact;
