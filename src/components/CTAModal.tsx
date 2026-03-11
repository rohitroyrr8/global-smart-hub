import { motion, AnimatePresence } from "framer-motion";
import { X, ClipboardList, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CTAModalProps {
  open: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const CTAModal = ({ open, onClose, whatsappUrl }: CTAModalProps) => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    onClose();
    navigate("/?scrollTo=send-inquiry");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-accent/30 bg-[hsl(210,40%,12%)] p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-2">Get In Touch</h3>
            <p className="text-sm text-primary-foreground/60 mb-6">Choose how you'd like to connect with us</p>

            <div className="space-y-3">
              <button
                onClick={handleInquiry}
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-accent/20 bg-accent/10 hover:bg-accent/20 transition-colors min-h-[48px] group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-primary-foreground">Send Inquiry</p>
                  <p className="text-xs text-primary-foreground/50">Fill out our inquiry form</p>
                </div>
              </button>

              <a
                href="mailto:business@oceangta.com"
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-accent/20 bg-accent/10 hover:bg-accent/20 transition-colors min-h-[48px] group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-primary-foreground">Email Us</p>
                  <p className="text-xs text-primary-foreground/50">business@oceangta.com</p>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-accent/20 bg-accent/10 hover:bg-accent/20 transition-colors min-h-[48px] group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-primary-foreground">Chat on WhatsApp</p>
                  <p className="text-xs text-primary-foreground/50">Quick response guaranteed</p>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CTAModal;
