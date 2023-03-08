import Navbar from "./Navbar";
import {useState} from "react";
import SearchDropDown from "./components/SearchDropDown";



function App() {
    const [dropDownListVisible, setDropDownListVisible] = useState(false);

    return (

        <div className="App">

            <Navbar appName='Passion Finder'/>
            <div className="w-52 h-24 p-4 ml-8">
                <div className="m-2">
                    <h2 className="text-4xl font-medium">Making a Difference starts Here</h2>
                    <p className="mt-2 text-xs">Find and support a charity that aligns with your passions. </p>
                </div>
                <div>>
                    <input type="search" placeholder="search for charity or cause"
                               className="border-blue-900 p-2 w-60 text-xs"
                                onClick={ () => setDropDownListVisible(true) } />

                        {
                            dropDownListVisible && <SearchDropDown />
                        }
                </div>
            </div>


                            {/*<div className="border-none flex">*/}
                            {/*        <img className="border-none" src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" alt="">*/}
                            {/*        <input type="text" className="border-none" placeholder="Custom Search" />*/}
                            {/*</div>*/}
        </div>

        )

}

export default App;




