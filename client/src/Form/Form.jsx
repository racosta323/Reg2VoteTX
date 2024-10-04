import Buttons from "../Buttons"
import Profile from "./Profile"
import Address from "./Address"
import Personal from "./Personal"
import Purpose from "./Purpose"

function Form() {
    return (
        <form>
            <div class='p-4 space-y-12 w-screen '>
                <Purpose/>
                <Profile />
                <Address/>
                <Personal/>
            </div>
            <Buttons />
        </form>
    )
}

export default Form
