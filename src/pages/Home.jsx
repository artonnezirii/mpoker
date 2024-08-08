import Banner from "../components/Banner";
import Casino from "../components/Casino";
import Download from "../components/Download";
import DownloadInfo from "../components/DownloadInfo";
import Howto from "../components/Howto";
import Providers from "../components/Providers";
import Service from "../components/Service";
import Slots from "../components/Slots";
import SportBating from "../components/SportBating";
export default function Home() {
    return (
       <div>
            <Banner />
            <Service />
            <Providers />
            <SportBating />
            <Slots />
            <Casino />
            <Howto />
            <DownloadInfo />
            <Download />
       </div>
    )
}
