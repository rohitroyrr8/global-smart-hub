import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20would%20like%20to%20know%20more%20about%20your%20training%20programs.";

const WhatsAppBubble = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with our team
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Button */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center shadow-lg shadow-[#25D366]/40 transition-colors">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
      </div>
    </a>
  );
};

export default WhatsAppBubble;
