import { MapPanel } from "@/components";
import Image from "next/image";

export default function page() {
  const url =
    "https://lh6.googleusercontent.com/gQc4FtfX8BLavlFqC15De4Ye3GQK4koN0ZYzQ0ZQdkiL2V3D7R6KDYnerT6fKhfr8tC3F2jQZ8jA-6lCRgJnOw1lUPDR-cWAnHzwk-AkmNOW5Go712LSFr7_xoAfa1bmTbMznam9SCqdMbKdLluuMg";

  return (
    <div className="flex flex-1 overflow-hidden">
      <MapPanel />
      <div className="h-full w-full m-auto overflow-hidden relative">
        <Image src={url} alt="Map" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}
