export type TitlesTypes = {
  text: string;
  type: string;
  t: any;
};

const Titles: JSX.IntrinsicElements = ({ text, type, t }: TitlesTypes) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements;
  text.split("\n").map((e) => {
    return <CustomTag>t(asd)</CustomTag>;
  });
};

export default Titles;
