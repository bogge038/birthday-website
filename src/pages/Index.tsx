import BirthdayHero from "@/components/BirthdayHero";
import VideoReveal from "@/components/VideoReveal";

const Index = () => {
  // You'll need to add your video files to the public folder
  // and update these paths accordingly
  const videoData = [
    {
      videoSrc: "/videos/birthday-video-1.mp4", // Add your first video here
      title: "Der Aktive Bre",
      description: "Bewegung macht Ihm viel Spaß",
      variant: "celebration" as const,
    },
    {
      videoSrc: "/videos/birthday-video-2.mp4", // Add your second video here
      title: "Der Null-Scheiß-Geber",
      description: "Jemandes Schrank ist leer",
      variant: "party" as const,
    },
    {
      videoSrc: "/videos/birthday-video-3.mp4", // Add your third video here
      title: "Der Liebevolle",
      description: "Immer zärtlich und warmherzig",
      variant: "joy" as const,
    },
    {
      videoSrc: "/videos/birthday-video-4.mp4", // Add your fourth video here
      title: "Bonus Mood - Shenanigans",
      description: "Manchmal unvorhersehbar und offen für Spielereien",
      variant: "surprise" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto">
        <BirthdayHero friendName="Hannes MC Clausen" />
      </section>

      {/* Video Reveals Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoData.map((video, index) => (
            <VideoReveal
              key={index}
              videoSrc={video.videoSrc}
              title={video.title}
              description={video.description}
              variant={video.variant}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4">
        <p className="text-muted-foreground">
          Hab dich lieb 💖
        </p>
      </footer>
    </div>
  );
};

export default Index;
