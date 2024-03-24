interface IProps{
    params:{
        box_modal:string;
    }
}

export default function Home(props:IProps) {
  return (
    <main>
     Section 1 Box modal{props.params.box_modal}
    </main>
  );
}