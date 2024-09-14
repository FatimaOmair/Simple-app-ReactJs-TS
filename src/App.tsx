import Alerts from './components/ui/alerts/Alerts'
import { Ban,NotebookPen,TriangleAlert,CheckCheck,Skull} from 'lucide-react';

export default function App() {
  return (
    <div style={{ margin:"2rem" }}>
    <Alerts type={"alert-danger"} icon={<Skull/>} title={"Something went wrong"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. , doloremque, laboriosam voluptas quos cumque <strong>ea soluta corporis tempora</strong>. Temporibus fugit quas harum dolorum! Ad eveniet aperiam unde?</Alerts>
    <Alerts type={"alert-info"} icon={<NotebookPen/>} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores libero nesciunt, doloremque, laboriosam voluptas quos cumque ea soluta corporis tempora. Temporibus fugit quas harum dolorum! Ad eveniet aperiam unde?"}/>
    <Alerts type={"alert-error"} icon={<Ban/>} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores libero nesciunt, doloremque, laboriosam voluptas quos cumque ea soluta corporis tempora. Temporibus fugit quas harum dolorum! Ad eveniet aperiam unde?"}/>
    <Alerts type={"alert-warning"} icon={<TriangleAlert/>} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores libero nesciunt, doloremque, laboriosam voluptas quos cumque ea soluta corporis tempora. Temporibus fugit quas harum dolorum! Ad eveniet aperiam unde?"}/>
    <Alerts type={"alert-success"} icon={<CheckCheck/>} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores libero nesciunt, doloremque, laboriosam voluptas quos cumque ea soluta corporis tempora. Temporibus fugit quas harum dolorum! Ad eveniet aperiam unde?"}/>
    </div>

  )
}
