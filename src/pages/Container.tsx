import { Button, Input, Textarea } from "@material-tailwind/react";
import { MainNav } from "@src/components/Navbar";

export default function Container() {
  return (
    <>
      <MainNav />
      <div className="flex flex-col items-center gap-4 p-8 max-w-[1024px] mx-auto">
        <Textarea label="Input Wallet Addresses" />
        <div className="flex items-center gap-4">
          <label className="w-full">Ton Amount:</label>
          <Input type="number" placeholder="0.001" label="Ton Amount" />
        </div>
        <Button variant="gradient" color="blue">Send</Button>
      </div>
    </>
  );
}