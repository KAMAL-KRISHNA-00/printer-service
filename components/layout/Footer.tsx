export const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Printer Service. All rights reserved.</p>
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
