import { ApiProvider } from "@/lib/providers/api-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider/theme-provider";
import React from "react";
import { RecoilRoot } from "recoil";
// import { Toaster } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import { PeerProvider } from "./peer-provider/peer-provider";

type TProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: TProvidersProps) => {
  return (
    <RecoilRoot>
      <PeerProvider>
        <ApiProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            {children}
          </ThemeProvider>
        </ApiProvider>
      </PeerProvider>
    </RecoilRoot>
  );
};
