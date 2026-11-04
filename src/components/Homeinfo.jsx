import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box w-[calc(100%-2rem)] max-w-xl px-5 py-4 sm:mx-5 sm:px-8 sm:pb-12 sm:pt-4">
    <p className="text-center text-sm font-medium sm:text-xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn pointer-events-auto">
      {btnText}
      <img src={arrow} className="h-4 w-4 object-contain" alt="" />
    </Link>
  </div>
);

const StoryBox = ({ text, children }) => (
  <div className="info-box w-[calc(100%-2rem)] max-w-xl px-5 py-4 sm:mx-5 sm:px-8 sm:pb-12 sm:pt-4">
    <p className="text-center text-sm font-medium sm:text-xl">{text}</p>
    {children}
  </div>
);

const Homeinfo = ({ currentStage, showNavigationHint }) => {
  switch (currentStage) {
    case 1:
      return (
        <StoryBox text={<>Hi, I&apos;m <span className="font-semibold">Vea</span>! 👋<br />I&apos;m pursuing my MSc in Computer Science in Stuttgart.</>}>
          {showNavigationHint && (
            <p className="absolute -bottom-14 left-1/2 w-max max-w-[90vw] -translate-x-1/2 rounded-lg bg-white/90 px-3 py-2 text-center text-xs font-medium text-slate-800 shadow-md sm:-bottom-16 sm:px-4 sm:text-base">
              Tap the right side of your screen or use the arrow keys to follow my journey.
            </p>
          )}
        </StoryBox>
      );
    case 2:
      return <StoryBox text={<>Before grad school, I spent two years building digital solutions at <span className="font-semibold">Schneider Electric</span>.</>} />;
    case 3:
      return <StoryBox text={<>At <span className="font-semibold">Thapar</span>, I earned my Bachelor&apos;s in Electrical and Computer Engineering with a 9 CGPA and an academic excellence scholarship.</>} />;
    case 4:
      return (
        <InfoBox
          text={<>I was born and raised in <span className="font-semibold">Gurgaon, India</span>. Curious about the rest of my journey?</>}
          link="/about"
          btnText="Learn More"
        />
      );
    default:
      return null;
  }
};

export default Homeinfo;
