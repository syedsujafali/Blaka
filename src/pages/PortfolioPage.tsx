import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* 10 Pure Images Gallery - Full Grid */}
      <Portfolio limit={10} asSlider={false} />
    </div>
  );
}
