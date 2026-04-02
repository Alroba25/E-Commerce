import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as ProviderUI } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./app/store";
import { Provider } from "react-redux";
import InternetConnectionProvider from "@/Providers/internetConnectionProvider";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderUI>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <InternetConnectionProvider>
            <App />
          </InternetConnectionProvider>
        </QueryClientProvider>
      </Provider>
    </ProviderUI>
  </StrictMode>,
);
