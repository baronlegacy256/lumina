import { Title } from "../components/partials/Title";
import Layout from "../layouts/Layout";
import { MusicIcon } from "lucide-react";
import { Button } from "../components/ui/Button";
import Empty from "../components/partials/Empty";
import { useForm } from "react-hook-form";

export default function Music() {
  //get the global props

  //define default form fields
  const { register, handleSubmit } = useForm();

  return (
    <Layout>
      <Title
        title={"Music Generation"}
        description="Make the next big hit"
        Icon={MusicIcon}
        iconColor={"text-emerald-500"}
        bgColor={"bg-emerald-500/10"}
      />
      <div className="px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div className="col-span-12 lg:col-span-10">
            <div className="m-0 p-0">
              <input
                id="prompt"
                type="text"
                name="prompt"
                className="w-full   border-none outline-none focus-none focus-visible:ring-0 peer-focus-visible:ring-transparent"
                placeholder="hiphop song by Bethooven"
                {...register("prompt")}
              />
            </div>
          </div>
          <Button className="col-span-12 lg:col-span-2 w-full">Generate</Button>
        </form>

        <div className="space-y-4 mt-4">
          <Empty label={"No chat started"} />
        </div>
      </div>
    </Layout>
  );
}
