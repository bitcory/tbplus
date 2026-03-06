'use client';

import { createContext, useContext } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { koKR } from '@clerk/localizations';

const ClerkConfigContext = createContext(false);

export function useClerkConfigured() {
  return useContext(ClerkConfigContext);
}

const isClerkConfigured = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder')
);

export default function ClerkWrapper({ children }) {
  if (!isClerkConfigured) {
    return (
      <ClerkConfigContext.Provider value={false}>
        {children}
      </ClerkConfigContext.Provider>
    );
  }

  return (
    <ClerkConfigContext.Provider value={true}>
      <ClerkProvider
        localization={koKR}
        appearance={{
          elements: {
            footer: "hidden"
          }
        }}
      >
        {children}
      </ClerkProvider>
    </ClerkConfigContext.Provider>
  );
}
