import { Html } from '@react-three/drei'

export const HomeLoader = () => (
  <div
    className="absolute inset-0 z-[5] flex flex-col items-center justify-center gap-5 bg-slate-300/95 text-center"
    role="status"
    aria-live="polite"
  >
    <div className="h-16 w-16 animate-spin rounded-full border-2 border-blue-500/20 border-t-blue-500" />
    <div>
      <p className="text-lg font-semibold text-slate-800">Polishing the clouds...</p>
      <p className="mt-1 text-sm text-slate-600">The tiny island is still finding its sea legs.</p>
    </div>
  </div>
);

const Loader = () => (
  <Html>
    <div className='flex justify-center items-center'>
      <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500
         border-t-blue-500 rounded-full animate-spin '>
      </div>
    </div>
  </Html>
);

export default Loader;
