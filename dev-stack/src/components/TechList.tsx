import { useEffect, useState } from "react";
import TechCard from "./TechCard";
import { type Technology } from "../Types";
import Sidebar from "./Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TechList = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.name} has been added to the stack!`);
  };

  const handleRemove = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id),
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div className="container mx-auto">
        <div className="tech-list-heading mb-8">
          <h1 className="md:text-left text-center mb-0 text-[24px] md:text-4xl font-bold tracking-tight text-[#10182C]">
            Explore the <span className="text-[#D946A8]">Technologies</span>
          </h1>
          <p className="md:mt-4 mt-1 text-[12px] text-center md:text-left text-[#64748B] md:text-xl">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3  md:container md:mx-auto mt-5 max-w-85 mx-auto">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {isLoading ? (
              <p className="col-span-full text-center text-[#64748B]">
                Loading technologies...
              </p>
            ) : (
              technologies.map((technology) => {
                const isAdded = stack.some((item) => item.id === technology.id);

                return (
                  <TechCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAdd}
                    isAdded={isAdded}
                  />
                );
              })
            )}
          </div>
          <div>
            <Sidebar
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechList;
