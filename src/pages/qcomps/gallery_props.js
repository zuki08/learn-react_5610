import SProfile from "./propStuff";
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <SProfile name={"Maria Skłodowska-Curie"} imgsrc={'https://i.imgur.com/szV5sdGs.jpg' }
      info={{
        prof:"physicist and chemist",
        awardNum: 4,
        awards:"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
        discover:"polonium (element)"
      }}/>
      <SProfile name={"Katsuko Saruhashi"} imgsrc={'https://i.imgur.com/YfeOqp2s.jpg'}
      info={{
        prof:"geochemist",
        awardNum: 2,
        awards:"(Miyake Prize for geochemistry, Tanaka Prize)",
        discover:"a method for measuring carbon dioxide in seawater"
      }}/>
    </div>
  );
}
