import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";

export function MainNav() {

  return (
    <Navbar className="w-full max-w-full px-4 py-2 rounded-none lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
        >
          Brand
        </Typography>
        <div className="flex items-center gap-x-1">
          <Button
            variant="gradient"
            color="blue"
          >
            <span>Connect Wallet</span>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}