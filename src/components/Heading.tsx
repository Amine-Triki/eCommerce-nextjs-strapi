type HeadingProps = {
  title: string;
  subtitle: string;
};

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div>
      <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {title}
      </h2>
      <p className="text-center text-xl " >{subtitle}</p>
    </div>
  );
};

export default Heading;
