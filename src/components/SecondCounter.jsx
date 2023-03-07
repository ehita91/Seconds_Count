import { withTimer } from "@/lib/withTimer";

export function SecondCounter({ seconds }) {
  const digits = seconds.toString().padStart(6, "0").split("");

  return (
    <div className="row">
      {digits.map((digits, index) => {
        return (
          <div
            key={index}
            className="col"
            style={{ padding: 20, border: "solid 1px black" }}
          >
            <h1>{digits}</h1>
          </div>
        );
      })}
    </div>
  );
}

export const SecondCounterWithTimer = withTimer(SecondCounter);
