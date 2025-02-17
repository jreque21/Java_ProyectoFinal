import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Facebook, Mail, Twitter, Youtube } from "lucide-react";

const Footer = () => {

  return (
    <footer className="w-dvw border-t bg-background/95">

      {/* Copyright Section */}
      <section className="w-full " >
        <Separator />
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 px-4 py-4 text-sm text-muted-foreground">
          <div>Copyright © {new Date().getFullYear()} Taekwon-Do. Todos los derechos reservados.</div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
