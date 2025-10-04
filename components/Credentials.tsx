import CFCD from '../components/graphics/cfcd.svg';
import CFF from '../components/graphics/cff.svg';
import CFE from '../components/graphics/cfe.svg';
import AICPA from '../components/graphics/aicpa.svg';
import ABV from '../components/graphics/abv.svg';
import FACP from '../components/graphics/facp.svg';
import FICPA from '../components/graphics/ficpa.svg';

export default function Credentials() {
    return <div className="flex max-w-7xl justify-center gap-x-16 h-[150px]">
        <CFE />
        <ABV />
        <FACP />
        <AICPA />
        <CFCD />
        <FICPA />
        <CFF />
    </div>
}