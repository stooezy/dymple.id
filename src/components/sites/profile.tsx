import { IcInstagram } from "../icons/ic-instagram";
import { IcX } from "../icons/ic-x";

export default function Profile() {
  return (
    <section className="container mx-auto py-4 px-4 lg:px-0">
      <div className="typography">
        <h1>Hello World</h1>
        <p>Hi! I am Yoga Permana.</p>

        <p>
          Working at <span className="text-orange-9">BrandZtory.</span>
        </p>

        <p>Find me on:</p>
        <div className="py-4 flex gap-4">
          <IcInstagram className="w-6 h-6" />
          <IcX className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
