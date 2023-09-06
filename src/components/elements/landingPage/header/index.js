import ButtonPrimaryFull from "@/components/ui/buttonPrimaryFull";
import Image from "next/image";

const Header = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-3 align-items-center">
      <div className="col d-md-none d-sm-block d-flex justify-content-center">
        <Image
          src={"/images/homepage-hero.png"}
          width={300}
          height={200}
          alt="Hero Image"
        />
      </div>
      <div className="col pt-5">
        <h2 className="fw-semibold mb-3 w-75">
          Build Your Career as a Professional Developer
        </h2>
        <h6 className="text-secondary">
          Start directed learning with learning paths
        </h6>
        <div className="mt-4">
          <ButtonPrimaryFull link="/register">Sign Up</ButtonPrimaryFull>
        </div>
      </div>
      <div className="col d-none d-md-block d-flex justify-content-center">
        <Image
          src={"/images/homepage-hero.png"}
          width={600}
          height={400}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Header;
