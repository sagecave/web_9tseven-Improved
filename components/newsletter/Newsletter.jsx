const Newsletter = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 sm:mt-0">
      <h2 className=" text-HeaderSizeSmall">JOIN THE 9TSEVEN NEWSLETTER</h2>
      <form>
        <input className=" border-2 border-main_white w-auto md:w-[20rem] h-[3rem] p-2" type="text" placeholder="Email address" name="mail" required></input>
        <input className="border-2 border-main_white border-l-[0] w-[5rem] h-[3rem] p-2 hover:bg-alternativ_black " type="submit" />

        <div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" name="mail"></input>
            <p>I accept the terms</p>
          </div>
          <p>Read terms</p>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
