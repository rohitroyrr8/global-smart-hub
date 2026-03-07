import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blockchain from "./pages/Blockchain";
import DataScience from "./pages/DataScience";
import HealthWellness from "./pages/HealthWellness";
import CollaborativeIntelligence from "./pages/CollaborativeIntelligence";
import CloseProtection from "./pages/CloseProtection";
import SalesMarketing from "./pages/SalesMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/health-wellness" element={<HealthWellness />} />
          <Route path="/collaborative-intelligence" element={<CollaborativeIntelligence />} />
          <Route path="/close-protection" element={<CloseProtection />} />
          <Route path="/sales-marketing" element={<SalesMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
