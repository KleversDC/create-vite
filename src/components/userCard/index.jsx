import  "./ctyle.css";
// function UserCard({name, address , position , color})
// {

//     return(
//         <div className="user-card" style={{backgroundColor: color || "blue"}}>
//         <h3>User Card</h3>
//         <p>Name : {name}</p>
//         <p>Adress : {address}</p>
//         <p>Position : {position}</p>
//         </div>
//     )
// }
// export default UserCard
import{ useState }from "react";
function ButtonPl({start})
{
    const [value , setValue] = useState(+start);
    const showValue=()=>{
        setValue(value + 1)



    }
return(
    <>
    <H1>TACK 1</H1>
    <button onClick={showValue}>{value}</button>
    </>
)
}
export default ButtonPl

    





// function Article({Avtor , title , posilannya})
// {
//     return(
//         <>
//         <h1>{title}</h1>
//         <img src="../public/images.jpg" alt="" />
//         <p>У сучасному світі соціальні мережі стали невід’ємною частиною життя молоді. Платформи, такі як Instagram, TikTok, Facebook та інші, щоденно використовуються мільйонами підлітків по всьому світу. Проте останні дослідження доводять, що надмірне використання соціальних мереж може мати негативний вплив на психічне здоров’я молодих людей.Психологи звертають увагу на зростання рівня тривожності, депресії та низької самооцінки серед підлітків, які проводять багато часу в мережі. Постійне порівняння себе з іншими, ідеалізовані образи в стрічці новин та страх пропустити щось важливе (FOMO – fear of missing out) призводять до психологічного виснаження.Втім, важливо розуміти, що самі соціальні мережі не є злом. Вони можуть бути джерелом підтримки, самовираження та розвитку, якщо використовувати їх усвідомлено та обмежено.Психологи радять батькам більше спілкуватися з дітьми, цікавитися їхнім онлайн-життям та власним прикладом показувати, як можна збалансовано користуватися цифровими технологіями.</p>
//         <p>{Avtor}</p>
//         <a href={posilannya}>{posilannya}</a>
//         </>
//     )
// }
// export default Article