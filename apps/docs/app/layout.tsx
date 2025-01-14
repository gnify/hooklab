import type { JSX, ReactNode } from 'react';
import { DesignSystemProvider } from '@hooklab/design-system';
import { fonts } from '@hooklab/design-system/lib/fonts';
import { cn } from '@hooklab/design-system/lib/utils';
import { RootProvider } from 'fumadocs-ui/provider';
import '@hooklab/design-system/styles/globals.css';

function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html
      lang="en"
      className={cn(fonts, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DesignSystemProvider>{children}</DesignSystemProvider>
        </RootProvider>
      </body>
    </html>
  );
}

export default Layout;
