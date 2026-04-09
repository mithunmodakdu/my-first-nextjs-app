import Image from "next/image";
import myImage from "@/assets/images/mithun.png"

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center">Regular img tag</h1>
      <img
        src="https://res.cloudinary.com/dbcykhgzd/image/upload/v1770562999/7iwiolo8t34-1770562995708-loginpage.png.png"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1 className="text-center mt-5">Next.js Image Component</h1>
      <Image
        src="https://res.cloudinary.com/dbcykhgzd/image/upload/v1770562999/7iwiolo8t34-1770562995708-loginpage.png.png"
        alt="Next.js Image"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1 className="text-center mt-5">Next.js Image Component with local image from @/assets/images(absolute import or alias)</h1>
      <Image
        src={myImage}
        alt="My Image"
        className="mx-auto"

      />

      <h1 className="text-center mt-5">Next.js Image Component with local image from public</h1>
      <Image
        src="/mithun.JPG"
        alt="My Image from public"
        width={300}
        height={300}
        className="mx-auto"

      />
    </div>
  );
};

export default GalleryPage;
