export default function Footer() {
  return (
    <footer className="sticky min-w-full py-6 bg-black/0 backdrop-blur-md border-t border-white/10">
      <div className="text-center flex justify-center gap-2">
        <p className="text-white/60 text-sm flex gap-1">
          Made by{" "}
          <a
            className={
              "flex hover:cursor-pointer hover:border-b border-b-white/60 transition-all duration-200 ease-in-out"
            }
            href={"https://github.com/ZomDev3343"}
            target={"_blank"}
          >
            z0m
          </a>{" "}
          - 2026
        </p>
      </div>
    </footer>
  );
}
