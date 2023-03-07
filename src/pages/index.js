import { SecondCounter, SecondCounterWithTimer } from "@/components/SecondCounter";
import { withTimer } from "@/lib/withTimer";

export default function Home() {
  return (
    <div className="text-center">
      <SecondCounterWithTimer seconds={withTimer} />
    </div>
  );
}
