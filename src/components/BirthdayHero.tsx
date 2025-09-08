const BirthdayHero = ({ friendName }: { friendName: string }) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="animate-float">
        <h1 className="text-6xl md:text-8xl font-bold gradient-celebration bg-clip-text text-transparent mb-4">
          🎉 Happy Birthday! 🎂
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-6">
          {friendName}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-pulse-slow">
          Get ready for some special surprises! Click on the cards below to reveal your birthday videos ✨
        </p>
      </div>
    </div>
  );
};

export default BirthdayHero;