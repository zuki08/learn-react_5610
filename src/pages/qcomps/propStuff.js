export default function science_profile({name, imgsrc, info}){
    return (
        <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={imgsrc}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {info.prof}
          </li>
          <li>
            <b>Awards: {info.awardNum} </b>
            {info.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {info.discover}
          </li>
        </ul>
      </section>
    )
}