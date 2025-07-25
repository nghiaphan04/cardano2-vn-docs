import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}