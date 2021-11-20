const container = document.getElementById("container");

function Hello() {
  return (
    <h1>
      Hello <ReturnName />
    </h1>
  );
}
ReactDOM.render(<Hello />, container);

function ShowObj() {
  const obj = { name: "Honada", model: "civic", year: "2015" };
  const carsArr = [];

  for (let i = 0; i < 10; i++) {
    carsArr.push(
      <h1 key={i}>
        {obj.name} {obj.model} {obj.year}
      </h1>
    );
  }
  return carsArr;
}

ReactDOM.render(<ShowObj />, container);

function ReturnName() {
  return <p>Brano</p>;
}
ReactDOM.render(<ReturnName />, container);

ReactDOM.render(<Hello />, container);

function Header() {
  return <h1>Header</h1>;
}
function Main() {
  return <h1>Main</h1>;
}
function Footer() {
  return (
    <>
      <Header />
      <Main />
      <h1>Footer</h1>
    </>
  );
}
ReactDOM.render(<Footer />, container);

function PrintName(props) {
    return <h1>{props.name}</h1>
}

ReactDOM.render(<PrintName name="barano"/>,container)

function PrintNameAndAge(props) {
    return <h1>{props.name} {props.age}</h1>
}

ReactDOM.render(<PrintNameAndAge name="mako" age="8"/>,container)

function PrintImg(props) {
    return <img src={props.src}></img>
}

ReactDOM.render(<PrintImg src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2"/>,container)

function PrintVideo(props) {
    return<video controls><source src={props.src}></source></video>
}

ReactDOM.render(<PrintVideo src="https://player.vimeo.com/external/151191331.sd.mp4?s=66e3e247c788a24239d8ec33bf522d554e376637&profile_id=112"/>,container)

//props זה פרמטרים שניתן להעביר בטאג JSX כמו פרמרים שיש בHTML
 