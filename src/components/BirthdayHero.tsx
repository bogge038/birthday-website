const BirthdayHero = ({ friendName }: { friendName: string }) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="animate-float">
        <h1 className="text-6xl md:text-8xl font-bold text-celebration mb-4">
          🎉 Hannes MC Clausen 🎂
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-pulse-slow mt-6">
          Ich wünsche dir alles Liebe zum Geburtstag! Fühl dich gedrückt und geküsst! Anliegend findest du 4 deiner Moods😊 
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="mt-12 flex justify-center space-x-8 text-4xl animate-float">
        <span className="animate-pulse">🎈</span>
        <span className="animate-pulse delay-100">🎊</span>
        <span className="animate-pulse delay-200">🎁</span>
        <span className="animate-pulse delay-300">🍰</span>
        <span className="animate-pulse delay-500">🎈</span>
      </div>
    </div>
  );
};

export default BirthdayHero;
