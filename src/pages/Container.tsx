import { Button, Input, Textarea } from "@material-tailwind/react";

export default function Container() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Textarea placeholder="Regular" label="Input Wallet Addresses" />
      <div className="flex items-center gap-4">
        <label>Ton Amount:</label>
        <Input type="number" placeholder="0" label="Ton Amount" />
      </div>
      <Button color="blue">Send</Button>
    </div>
  );
}