import { useSelector } from "react-redux";
import ChatBot from "./components/ChatBot";
import Form from "./components/Form";
function App() {
  const authed = useSelector(state=>state.auth)
  return <>
    {
      authed.showAuthForm && !authed.authed ?
      <Form />
      :null
    }
    <ChatBot/>
    </>
}

export default App;
