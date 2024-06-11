import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Link href={"/test"}>Test</Link>
      <Link href={"/group"}>Dashboard</Link>
    </div>    
  );
}
