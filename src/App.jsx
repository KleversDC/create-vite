
import './App.css'

import Page1 from './components/Page1'
import Timer from './components/times'
import Article from './components/userCard'
import ButtonPl from './components/userCard'
import UserCard from './components/userCard'
import UserList from './components/userList'

function App() {
  const USERS = [
    { name: "Yurii", address: "Rivne, Ukraine", position: "Teacher", color: "Red" },
    { name: "Vitalik", address: "Kostopil, Ukraine", position: "Student", color: "Green" },
    { name: "Jenya", address: "Dzhmelivka, Ukraine", position: "Pupil", color: "Orange" },
    { name: "Mihailo", address: "Verhivsk, Ukraine", position: "Student" }
  ]
  return (
      <>
      {/* <Article title="Вплив соціальних мереж на психічне здоров’я підлітків" Avtor="Іваненко Марія" posilannya="https://www.unicef.org/ukraine/media/18011/file/Social_Media_Impact_Report.pdf"/> */}
      {/* <Page1/> */}
      {/* <UserCard name="fff" adress="total" position="Teacher" color="Red"/>

      <UserCard color="yellow"/>
      <UserCard/> */}
      <ButtonPl start="0"/>
      <UserList users={USERS}/>
      <Timer start="10"/>
      <Timer start="20"/>
      {/* <h3>
        Біографія Шекспіра
      </h3>
      <img src="2024042311451028.jpg" alt="" />
      <p>
      🖋️ Вільям Шекспір (1564–1616)Вільям Шекспір — англійський драматург, поет і актор, якого вважають одним із найвидатніших письменників усіх часів. Народився 23 квітня 1564 року в місті Стретфорд-апон-Ейвон, Англія.У молодості Шекспір одружився з Енн Гетевей, з якою мав трьох дітей. Приблизно у 1580-х роках він переїхав до Лондона, де почав свою кар'єру в театрі як актор і автор п'єс. Він став співвласником театру "Глобус", де йшли постановки багатьох його творів.Шекспір написав 37 п’єс, понад 150 сонетів і декілька поем. Його творчість охоплює трагедії ("Гамлет", "Макбет"), комедії ("Дванадцята ніч", "Сон літньої ночі") та історичні драми ("Генріх V", "Річард III"). Його мова, образи й психологізм персонажів залишаються актуальними донині.Він помер 23 квітня 1616 року, у день свого 52-річчя, в рідному Стретфорді.
      </p> */}
      </>
  )
}

export default App
