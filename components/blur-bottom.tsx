export function BlurBottom() {
  return (
    <div className="blur-container">
      <div className="mask-gradient-1 pointer-events-none fixed right-0 bottom-0 left-0 z-[1] h-12 backdrop-blur-[0.078125px] md:h-28"></div>
      <div className="mask-gradient-2 pointer-events-none fixed right-0 bottom-0 left-0 z-[2] h-12 backdrop-blur-[0.15625px] md:h-24"></div>
      <div className="mask-gradient-3 pointer-events-none fixed right-0 bottom-0 left-0 z-[3] h-12 backdrop-blur-[0.3125px] md:h-24"></div>
      <div className="mask-gradient-4 pointer-events-none fixed right-0 bottom-0 left-0 z-[4] h-12 backdrop-blur-[0.625px] md:h-24"></div>
      <div className="mask-gradient-5 pointer-events-none fixed right-0 bottom-0 left-0 z-[5] h-12 backdrop-blur-[1.25px] md:h-24"></div>
      <div className="mask-gradient-6 pointer-events-none fixed right-0 bottom-0 left-0 z-[6] h-12 backdrop-blur-[2.5px] md:h-24"></div>
      <div className="mask-gradient-7 pointer-events-none fixed right-0 bottom-0 left-0 z-[7] h-12 backdrop-blur-[5px] md:h-24"></div>
      <div className="mask-gradient-8 pointer-events-none fixed right-0 bottom-0 left-0 z-[8] h-12 backdrop-blur-[10px] md:h-24"></div>
    </div>
  );
}
