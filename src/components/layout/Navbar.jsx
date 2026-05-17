import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import logoBranca from "../../../Logo-branca.png";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Funcionalidades", path: "/#features" },
  { label: "Planos", path: "/#pricing" },
  { label: "Contato", path: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (path) => {
    setOpen(false);
    if (path.includes("#")) {
      const id = path.split("#")[1];
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,13,26,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoBranca} alt="Poodle" className="h-28 lg:h-32 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-sm font-medium transition-colors"
                style={{ color: "#a3b3cc" }}
                onMouseEnter={e => e.target.style.color = "#ffffff"}
                onMouseLeave={e => e.target.style.color = "#a3b3cc"}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contato">
              <Button variant="outline" size="sm" className="border-border text-white hover:bg-secondary">
                Fale Conosco
              </Button>
            </Link>
            <Link to="/#pricing" onClick={() => handleNavClick("/#pricing")}>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Começar Agora
              </Button>
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border" style={{ background: "#0f152d" }}>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="text-lg font-medium text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-6 flex flex-col gap-3">
                  <Link to="/contato" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">Fale Conosco</Button>
                  </Link>
                  <Link to="/#pricing" onClick={() => { setOpen(false); handleNavClick("/#pricing"); }}>
                    <Button className="w-full bg-primary">Começar Agora</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}




