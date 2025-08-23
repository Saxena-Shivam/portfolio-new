import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { toast } = useToast();
  const titleRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Observer for the title element
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-100px" }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [titleRef]);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your User ID
    // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key from https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "dwfUUMMXly0EXYLPP",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Map form field names to state properties
    const fieldMap: Record<string, string> = {
      user_name: "name",
      user_email: "email",
      message: "message",
    };

    const stateKey = fieldMap[name] || name;

    setFormData({
      ...formData,
      [stateKey]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key
      const result = await emailjs.sendForm(
        "service_4fkn5va",
        "template_6spgsog",
        formRef.current as HTMLFormElement,
        {
          publicKey: "dwfUUMMXly0EXYLPP", // Use the same public key as in the init method
        }
      );

      if (result.text === "OK") {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Message failed to send",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "shivamsaxena562006@gmail.com",
      href: "mailto:shivamsaxena562006@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 9507250528",
      href: "tel:+919507250528",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bhubaneswar, Odisha, India",
    },
  ];

  return (
    <section id="contact" className="gradient-bg py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold ${
              isInView ? "title-underline animate" : "title-underline"
            }`}
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-start gap-4 p-4 section-card hover:border-primary/30 transition-all fade-in-up animate-contact-item hover-scale`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="rounded-full bg-secondary p-3 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Saxena-Shivam"
                className="p-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-colors duration-300 hover-scale-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/shivam-saxena-aa8754289/"
                className="p-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-colors duration-300 hover-scale-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/Shivam562006"
                className="p-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-colors duration-300 hover-scale-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 slide-in-right">
            <div className="section-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Hi, I'd like to talk about..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 btn-scale"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - Added via style tag in the head */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }

        .slide-in-right {
          opacity: 0;
          animation: slideInRight 0.7s forwards;
        }

        .hover-scale:hover {
          transform: scale(1.02) translateX(5px);
          transition: transform 0.3s ease;
        }

        .hover-scale-icon:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }

        .btn-scale:hover {
          transform: scale(1.03);
          transition: transform 0.2s ease;
        }

        .btn-scale:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
      `,
        }}
      />
    </section>
  );
}
