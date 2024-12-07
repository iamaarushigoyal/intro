import { SplitHero } from '@/components/split-hero';
import { VideoSection } from '@/components/video-section';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplitHero />
      <VideoSection />
      <Skills />
    </main>
  );
}