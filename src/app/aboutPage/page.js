const about = () => {
  return (
    <section className="h-[80vh] grid col-start-2 col-end-3">
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        <h1 className="text-HeaderSizeSmall text-main_black">ABOUT US</h1>
        <div className="text-alternativ_black text-ParagraphSize flex flex-col gap-5">
          <p className=" font-bold">Founded in Copenhagen in 2023 by longtime friends Mikkel, Casper, and Jun, 9T7 didn’t start as a business idea - it began as a shared feeling that something was missing.</p>
          <p>
            Once connected through football, each of them found their own way into running. But it wasn’t until a spontaneous run brought them back together that the idea took shape: a space where movement, creativity, and community could coexist.
          </p>
          <p>
            <span className=" font-bold">9T7 is more than a running brand - it’s a movement, a mindset, and a community.</span> It’s about progress, connection, and self-discovery in the pursuit of becoming the best version of yourself.
          </p>
          <p className=" font-bold">Welcome to our journey.</p>
        </div>
      </div>
    </section>
  );
};

export default about;
