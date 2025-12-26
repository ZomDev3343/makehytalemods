import { IMAGES } from "../utils/Constants.ts";

export default function NotFound() {
  return (
    <div>
      <img
        src={IMAGES.BACKGROUND_CARROUSEL[0]}
        className={"fixed top-0 left-0 w-full h-screen blur-md -z-10"}
      />
      <img
        src={IMAGES.ERROR404}
        className={"w-[75%] mx-auto mt-10 rounded-lg shadow-lg border-2"}
      />
    </div>
  );
}
