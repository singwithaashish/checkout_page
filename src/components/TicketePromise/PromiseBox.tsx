interface PromiseBoxProps {
  item: {
    svg: JSX.Element;
    title: string;
    description: string;
  };
}
export default function PromiseBox({
  item,
  index,
}: PromiseBoxProps & { index: number }) {
  return (
    <div
      key={index}
      className="flex flex-col justify-start gap-y-3 my-5 border rounded-lg p-5"
    >
      {item.svg}
      <h4 className="text-lg font-medium mt-8">{item.title}</h4>
      <p className="text-md text-text_secondary">{item.description}</p>
    </div>
  );
}
