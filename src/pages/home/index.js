import "./index.css"

import SignIn from "../../components/SignIn"
import Header from "../../components/Header"
import HomeImage from "../../components/HomeImage"
import { useState } from "react"
import SignUp from "../../components/SignUp"

export default function Home() {
    const [isSignup, SetIsSignUp] = useState(false)

    return (
        <div className="container">
            <section className="container-form">
                <Header />

                <form>
                    {
                        !isSignup ? 
                        <SignIn SetIsSignUp={SetIsSignUp}/> :
                        <SignUp SetIsSignUp={SetIsSignUp}/>
                    }
                </form>
            </section>

            <HomeImage />
        </div>
    )
}