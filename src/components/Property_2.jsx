import image_1 from "../assets/image-1.jpg";
import image_2 from "../assets/image2.jpg";
import image_3 from "../assets/image3.jpg";

function Property_2() {
  return (
    <div>
      <div className="flex w-full">
        <div className="text-center w-1/2 bg-gradient-to-r from-orange-500 to-white-500 ">
          <div className="my-41">
            <h1 className="font-bold text-3xl">Fully Responsive Design</h1>
            <p className="py-0.5">
              When you use a theme created by Start Bootstrap, you know
            </p>
            <p className="py-0.5">
              that the theme will look great on any device, whether it's a
            </p>
            <p className="py-0.5">
              phone, tablet, or desktop the page will behave responsively!
            </p>
          </div>
        </div>

        <div className="w-1/2">
          <img src={image_2} />
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-1/2">
          <img src={image_1} />
        </div>

        <div className="text-center w-1/2 bg-gradient-to-r from-white-500 to-blue-500">
          <div className="my-41">
            <h1 className="font-bold text-3xl">Updated For Bootstrap 5</h1>
            <p className="py-0.5">
              Newly improved, and full of great utility classes, Bootstrap 5 is
            </p>
            <p className="py-0.5">
              leading the way in mobile responsive web development! All of
            </p>
            <p className="py-0.5">
              the themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="text-center w-1/2 bg-gradient-to-r from-gray-500 to-white-500">
          <div className="my-41">
            <h1 className="font-bold text-3xl">Easy to Use & Customize</h1>
            <p className="py-0.5">
              Landing Page is just HTML and CSS with a splash of SCSS for
            </p>
            <p className="py-0.5">
              users who demand some deeper customization options. Out of
            </p>
            <p className="py-0.5">
              the box, just add your content and images, and your new landing
            </p>
            <p className="py-0.5">page will be ready to go!</p>
          </div>
        </div>

        <div className="w-1/2">
          <img src={image_3} />
        </div>
      </div>
    </div>
  );
}

export default Property_2;
