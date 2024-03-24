interface IProps{
    params:{
        operation:string;
    }
}

export default function Home(props:IProps) {
  return (
    <main>
     js operation {props.params.operation}
    </main>
  );
}