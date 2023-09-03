export default function FooterCopyright() {
  return (
    <footer className="bg-black py-4 ">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Sweatoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
