const Logo = "/assets/images/logo.svg";  

const ThankYou = ({ onRestart }) => {
  return (
    <div className="w-[58.8rem] h-[46.6rem] bg-sageMidWhite rounded-[2rem] flex flex-col items-center gap-[2rem] justify-center shadow-md">
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        <p className="text-[1.6rem] text-center w-[45rem]">
          Your invoice would be sent to your via your email. 100% refundable
          payment first before service.
        </p>
        <h2 className="font-bold text-[2.4rem] text-sageFormBlue">
          Thank You For Choosing
        </h2>

        <div className=" flex flex-col items-center gap-[1rem]">
          <img src={Logo} width={93} height={94} alt="SageHub" />
          <h1 className="text-[3.2rem] font-[800] text-sageHeavyBlue">
            SageHub
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[1.5rem] mt-3">
        <button
          className="text-sageDarkBlue text-[1.6rem]"
          onClick={() => (window.location.href = '/')}
        >
          Go To Home
        </button>
        <button
          className="bg-sageDarkBlue text-white text-[1.6rem] py-[1rem] px-[2rem] rounded-[1rem]"
          onClick={onRestart}
        >
          Book another Cleaner
        </button>
      </div>
    </div>
  );
};

export default ThankYou;

