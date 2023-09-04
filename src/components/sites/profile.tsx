import { IcGithub } from "../icons/ic-github";
import { IcInstagram } from "../icons/ic-instagram";
import { IcSpotify } from "../icons/ic-spotify";
import { IcX } from "../icons/ic-x";

export default function Profile() {
  return (
    <section className="container mx-auto py-4 px-4 lg:px-0">
      <div className="typography">
        <h1 className="py-12">Hello World</h1>
        <p>
          Hi! I am <span className="text-jade-11 font-bold">Yoga Permana.</span>
        </p>

        <p>
          Working as a{" "}
          <span className="text-jade-11 font-bold">Fullstack Developer.</span>
        </p>

        <p>Find me on:</p>
        <div className="py-4 flex gap-4">
          <a href="https://www.instagram.com/yopernurr" target="_blank">
            <IcInstagram className="w-6 h-6" />
          </a>
          {/* <a href="https://www.instagram.com/yopernurr" target="_blank">
            <IcX className="w-6 h-6" />
          </a> */}
          <a href="https://www.github.com/stooezy" target="_blank">
            <IcGithub className="w-6 h-6" />
          </a>
          <a
            href="https://open.spotify.com/user/yogapermana30?si=070088b62c134299"
            target="_blank"
          >
            <IcSpotify className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
