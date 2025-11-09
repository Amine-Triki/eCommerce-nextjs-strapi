import FormContact from "@/components/FormContact";
import Heading from "@/components/Heading";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Heading
        title="Contact Us"
        subtitle="Get in touch"
      />
      <FormContact />
    </div>
  );
};

export default page;
