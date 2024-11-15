'use client';

import BlurFade from './magicui/blur-fade';
import githubDark from './../assets/githubDark.png';
import githubLight from './../assets/githubLight.png';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function GithubGraphImage() {
  const { theme, setTheme } = useTheme();

  return (
    <section className=''>
      <BlurFade delay={0.04}>
        <div className='w-full relative'>
          <Image
            src={theme === 'dark' ? githubDark : githubLight}
            alt=''
            className='w-full object-contain '
          />
        </div>
      </BlurFade>
    </section>
  );
}
