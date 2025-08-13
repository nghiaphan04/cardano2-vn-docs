import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { images } from 'public/images';
import Image from 'next/image';
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image  src={images.main_logo} alt="logo" width={40} height={40} />
      </>
    ),
  },
  githubUrl: 'https://github.com',
 
};
