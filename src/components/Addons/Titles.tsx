export type TitlesTypes = {
  text: string;
  type: string;
  margin: number;
};

const Titles: any = ({ text, type, margin }: TitlesTypes) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements;
  return text
    .split("\n")
    .map((e) => <CustomTag style={{ marginBottom: margin }}>{e}</CustomTag>);
};

export default Titles;
