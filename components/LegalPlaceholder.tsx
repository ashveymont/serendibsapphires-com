import PageHeader from "@/components/PageHeader";
import Todo from "@/components/Todo";

/** Placeholder body for legal pages until the real text is written. */
export default function LegalPlaceholder({ heading, todo }: { heading: string; todo: string }) {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader heading={heading} />
      <div className="mx-auto mt-12 max-w-3xl text-[15px] font-light leading-8 text-[#A09080]">
        <Todo>{todo}</Todo>
      </div>
    </div>
  );
}
