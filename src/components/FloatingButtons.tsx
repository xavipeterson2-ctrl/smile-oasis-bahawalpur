import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/923186379364"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[#fff]" />
    </a>
    {/* Call floating button (mobile only) */}
    <a
      href="tel:03186379364"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
      aria-label="Call clinic"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </a>
  </>
);

export default FloatingButtons;
