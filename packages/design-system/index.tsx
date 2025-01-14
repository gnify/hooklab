import type { ThemeProviderProps } from 'next-themes';
import type { JSX } from 'react';
import { Toaster } from './components/ui/sonner';
import { TooltipProvider } from './components/ui/tooltip';

type DesignSystemProviderProperties = ThemeProviderProps;

export const DesignSystemProvider = ({
  children,
}: DesignSystemProviderProperties): JSX.Element => (
  <>
    <TooltipProvider>{children}</TooltipProvider>
    <Toaster />
  </>
);
