import { useParams } from "react-router";
import json_datas from "../test.json"
import CodeBlock from "./CodeBlock";
import  { Link } from 'react-router-dom';


const Blog = () => {
    const {id} = useParams()
    return (
        json_datas.data.map(item =>
            { return item.title === `${id}` ?
                <div className="blog_detail">
                    <div className="b_title">
                        <h1>{item.title}</h1> 
                    </div>
                    <Content content={item.content}/>
                    {/* <div className="b_content">
                        {item.content}
                    </div> */}
                </div>
                :
                ""
            }
        )
    )
}

const Content = (props) => {
    // props.content.forEach(c => {
    //     console.log(c.language)    
    // })

    return props.content.map(c => {
        return typeof(c) === "string" ? 
        <p className="b_content">{c}</p>
        : c.type === "code" ?
        <CodeBlock language={c.language} code={c.code} />
        // <code><div className="inside_code"><Code code={c["code"]}/></div></code>
        : c.type === "link" ?
        <div className="c_link"><Url data={c}/></div>
        : c.type === "image" ?
        <div className="c_image">
            <Image data={c}/>
            <Url data={c}/>
        </div>
        :
        ""
    })
}

// const Code = (props) => {
//     props.code.forEach(c => {
//         console.log(c)    
//     })
//     return props.code.map(c => {
//         return <div className="code_text">{c}</div>
//     })
// }

const Url = (props) => {
    return <Link target="_blank" rel="noopener noreferrer" to={props.data.link}>{props.data.content}</Link>
    }

// 圖片用props傳 一直傳不過去 而寫死的url卻可以 ?????
const Image = (props) => {
    return <img src={require("../images/"+props.data.image)} alt=""></img>
    }

export default Blog
