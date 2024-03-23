
interface IProps{
    params:{
        myname:string;
    }
}

export default function Home(props:IProps) {
  return (
    <main>
     hello,myfriend,{props.params.myname}
    </main>
  );
}

