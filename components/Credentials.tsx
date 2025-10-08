import Image from 'next/image';

import CFCD from '../components/graphics/cfcd.svg?url';
import CFF from '../components/graphics/cff.svg?url';
import CFE from '../components/graphics/cfe.svg?url';
import AICPA from '../components/graphics/aicpa.svg?url';
import ABV from '../components/graphics/abv.svg?url';
import FACP from '../components/graphics/facp.svg?url';
import FICPA from '../components/graphics/ficpa.svg?url';

export default function Credentials() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-y-5 md:max-w-7xl justify-center md:gap-x-16 md:h-[150px] *:scale-80 md:*:scale-none">
      <Image src={CFE.src} alt="CFE logo" width={173} height={94} />
      <Image src={ABV.src} alt="ABV logo" width={131} height={89} />
      <Image src={FACP.src} alt="FACP logo" width={116} height={116} />
      <Image src={AICPA.src} alt="AICPA logo" width={221} height={138} />
      <Image src={CFCD.src} alt="CFCD logo" width={124} height={124} />
      <Image src={FICPA.src} alt="FICPA logo" width={197} height={79} />
      <Image src={CFF.src} alt="CFF logo" width={180} height={122} />
    </div>
  );
}
