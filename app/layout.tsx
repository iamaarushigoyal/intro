import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: 'Portfolio | Explorer & Developer',
  description: 'Personal portfolio showcasing development and exploration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}