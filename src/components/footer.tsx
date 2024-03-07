import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 py-4 z-10">
      <div className="max-w-screen-lg flex justify-center mx-auto">
        <div className="container">
          <div className="grid grid-cols-4">
            <div className="flex flex-col">
              <div>
                <Button variant={"link"}>Impress</Button>
              </div>
              <div>
                <Button variant={"link"}>Privacy Policy</Button>
              </div>
              <div>
                <Button variant={"link"}>Team</Button>
              </div>
            </div>
            <div>
              <Button variant={"link"}>Team</Button>
            </div>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LMU Developers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
