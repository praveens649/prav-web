import { GradientBackground } from "../../components/nurui/gradient-background";
import NameShowcase from "../../components/nurui/show-name";
export default function Home() {
  return (
    <>
      <div className="bg-background relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="z-10 absolute text-center text-2xl font-semibold tracking-tighter whitespace-pre-wrap text-black md:text-7xl dark:text-white">
          <NameShowcase />
        </div>
        <GradientBackground />
      </div>
    </>
  );
}
