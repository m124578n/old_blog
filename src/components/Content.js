import json_datas from "../test.json"
import  { Link } from 'react-router-dom';

const Content = () => {
    // sort 
    json_datas.data.sort((a, b) => {
        return  b.date - a.date
    })

    return (
        json_datas.data.map(item => 
            <div className="content" key={item.id}>
                <Link className="title" to={ `/${item.title}` }>
                    {item.title}
                </Link>
                <div className="content_date">
                    date : {item.date}
                </div>
                <div className="short-content">
                    {item.short_content}
                </div>
            </div>
        )
    )
}



export default Content 
