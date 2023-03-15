import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import SearchDropDown from "./components/SearchDropDown";
import {Card} from "./components/Card";


function App() {
    // const [pages, setPages] = useState(
    //     [{
    //             'title': '',
    //             'content': '',
    //             'image': ''
    //     },
    //         {
    //             'title': '',
    //             'content': '',
    //             'image': ''
    //     }, {
    //             'title': '',
    //             'content': '',
    //             'image': ''
    //     }, {
    //             'title': '',
    //             'content': '',
    //             'image': ''
    //     }, {
    //             'title': '',
    //             'content': '',
    //             'image': ''
    //     }]);
    const [dropDownListVisible, setDropDownListVisible] = useState(false);

    const [articles, setArticles] = useState([])
    //1st useState() hook

    useEffect(() => {
        // 2nd React hook
        const fetchArticles = async () => {
            const newArticle = await getArticles();

            setArticles(newArticle);
        }

        fetchArticles()

    },[])

    const getArticles = async () => {

        const response = await  fetch('', {

            headers:{
                apikey: '',
                Authorization: ''
            }
        })
        const allArticles = await  response.json()
    //     set the articles to your state called 'articles'
    //     setArticles(allArticles)

        return allArticles
    }

    return (
        <div className="App">

            <Navbar appName='Passion Finder'/>

            <button onFocus={() => setArticles([])}>
                classNmae={'btn-sm'}> Clear all articles
            </button>

            {/*<div className="w-52 h-24 p-4 ml-8">*/}
            {/*    <div className="m-2">*/}
            {/*        <h2 className="text-4xl font-medium">Making a Difference starts Here</h2>*/}
            {/*        <p className="mt-2 text-xs">Find and support a charity that aligns with your passions. </p>*/}
            {/*    </div>*/}
            {/*    <div>>*/}

            <div>
                <input type="search" placeholder="search for charity or cause"
                       className="border-blue-900 p-2 w-60 text-xs"
                       onClick={ () => setDropDownListVisible(true) } />
            

                        {
                            dropDownListVisible && <SearchDropDown />
                        }

                    {
                        articles.map((p) =>
                            <Card title={p.title} content={p.content} image={p.image} />)

                    }
                </div>
            </div>

        )
    ;
}

export default App;




