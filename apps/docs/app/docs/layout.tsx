import type { JSX, ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}

export default Layout;
