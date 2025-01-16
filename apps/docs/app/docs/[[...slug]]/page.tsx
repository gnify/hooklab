import type { JSX } from 'react';
import { source } from '@/source';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<JSX.Element> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export default Page;

async function generateStaticParams(): Promise<
  (Record<'slug', string[]> & Record<'lang', string>)[]
> {
  return source.generateParams();
}

async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<{
  title: string;
  description: string | undefined;
}> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export { generateMetadata, generateStaticParams };
