import { withTimer } from "@/lib/withTimer";

export function SecondCounter({ seconds }) {
  const digits = seconds.toString().padStart(6, "0").split("");

  return (
    <div className="row justify-content-center p-5">
      {digits.map((digits, index) => {
        return (
          <div
            key={index}
            className="bg-black col-auto py-2 mx-auto rounded-pill"
            style={{ padding: 20, border: "solid 2px white" }}
          >
            <h1 className="text-white p-4">{digits}</h1>
          </div>
        );
      })}
    </div>
  );
}

export const SecondCounterWithTimer = withTimer(SecondCounter);
