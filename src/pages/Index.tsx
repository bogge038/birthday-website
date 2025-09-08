import BirthdayHero from "@/components/BirthdayHero";
import VideoReveal from "@/components/VideoReveal";

const Index = () => {
  // You'll need to add your video files to the public folder
  // and update these paths accordingly
  const videoData = [
    {
      videoSrc: "/videos/birthday-video-1.mp4", // Add your first video here
      title: "Memory Lane",
      description: "Our first adventure together!",
      variant: "celebration" as const,
    },
    {
      videoSrc: "/videos/birthday-video-2.mp4", // Add your second video here
      title: "Fun Times",
      description: "All those crazy moments!",
      variant: "party" as const,
    },
    {
      videoSrc: "/videos/birthday-video-3.mp4", // Add your third video here
      title: "Best Friends",
      description: "Through thick and thin!",
      variant: "joy" as const,
    },
    {
      videoSrc: "/videos/birthday-video-4.mp4", // Add your fourth video here
      title: "Birthday Wishes",
      description: "Here's to many more years!",
      variant: "surprise" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto">
        <BirthdayHero friendName="[Friend's Name]" />
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
          Made with love for the most amazing friend!
        </p>
      </footer>
    </div>
  );
};

export default Index;