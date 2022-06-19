const Footer = () => {
  return (
    <footer className="fixed bottom-0  w-full h-16">
      <div className="text-center text-sm container  h-full  flex justify-between items-center">
        <span className=" text-sm font-normal"> philipjonlewis@gmail.com </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
