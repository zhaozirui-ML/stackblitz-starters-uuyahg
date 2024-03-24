interface IProps{
    params:{
        selector:string;
    }
}

export default function Home(props:IProps) {
  return (
    <main>
     CSS Selector {props.params.selector}
    </main>
  );
}